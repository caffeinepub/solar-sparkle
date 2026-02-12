import MixinStorage "blob-storage/Mixin";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  include MixinStorage();

  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile System
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  type ConsultancyForm = {
    id : Nat;
    name : Text;
    phoneNumber : Text;
    email : Text;
    location : Text;
    requirementMessage : Text;
    timestamp : Time.Time;
    status : Text;
  };

  module ConsultancyForm {
    public func compare(consultancyForm1 : ConsultancyForm, consultancyForm2 : ConsultancyForm) : Order.Order {
      Nat.compare(consultancyForm1.id, consultancyForm2.id);
    };
  };

  type PartnerRegistration = {
    id : Nat;
    name : Text;
    companyName : Text;
    phoneNumber : Text;
    email : Text;
    location : Text;
    businessDetails : Text;
    timestamp : Time.Time;
    status : Text;
  };

  module PartnerRegistration {
    public func compare(partnerRegistration1 : PartnerRegistration, partnerRegistration2 : PartnerRegistration) : Order.Order {
      Nat.compare(partnerRegistration1.id, partnerRegistration2.id);
    };
  };

  type AmcEnquiry = {
    id : Nat;
    clientName : Text;
    phoneNumber : Text;
    email : Text;
    location : Text;
    systemDetails : Text;
    timestamp : Time.Time;
    status : Text;
  };

  module AmcEnquiry {
    public func compare(amcEnquiry1 : AmcEnquiry, amcEnquiry2 : AmcEnquiry) : Order.Order {
      Nat.compare(amcEnquiry1.id, amcEnquiry2.id);
    };
  };

  let consultancyForms = Map.empty<Nat, ConsultancyForm>();
  let partnerRegistrations = Map.empty<Nat, PartnerRegistration>();
  let amcEnquiries = Map.empty<Nat, AmcEnquiry>();

  var nextConsultancyId = 1;
  var nextPartnerId = 1;
  var nextAmcEnquiryId = 1;

  ////////////////////////////////////////////////////////////////////////////
  // Consultancy and Partner Registration
  ////////////////////////////////////////////////////////////////////////////
  public shared ({ caller }) func submitConsultancyForm(name : Text, phoneNumber : Text, email : Text, location : Text, requirementMessage : Text) : async Nat {
    // Public submission - no authorization required (guests can submit)
    let consultancyForm : ConsultancyForm = {
      id = nextConsultancyId;
      name;
      phoneNumber;
      email;
      location;
      requirementMessage;
      timestamp = Time.now();
      status = "new";
    };

    consultancyForms.add(nextConsultancyId, consultancyForm);
    nextConsultancyId += 1;
    consultancyForm.id;
  };

  public shared ({ caller }) func submitPartnerRegistration(name : Text, companyName : Text, phoneNumber : Text, email : Text, location : Text, businessDetails : Text) : async Nat {
    // Public submission - no authorization required (guests can submit)
    let partnerRegistration : PartnerRegistration = {
      id = nextPartnerId;
      name;
      companyName;
      phoneNumber;
      email;
      location;
      businessDetails;
      timestamp = Time.now();
      status = "new";
    };

    partnerRegistrations.add(nextPartnerId, partnerRegistration);
    nextPartnerId += 1;
    partnerRegistration.id;
  };

  // ------------------- ADMIN VIEW FUNCTIONS -------------------
  // Only Admin can call this - protected with admin authorization
  public query ({ caller }) func adminGetAllConsultancyForms() : async [ConsultancyForm] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all consultancy forms");
    };
    consultancyForms.values().toArray().sort();
  };

  // Only Admin can call this - protected with admin authorization
  public query ({ caller }) func adminGetAllPartnerRegistrations() : async [PartnerRegistration] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all partner registrations");
    };
    partnerRegistrations.values().toArray().sort();
  };

  public shared ({ caller }) func updateConsultancyStatus(id : Nat, status : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can update consultancy status");
    };
    switch (consultancyForms.get(id)) {
      case (null) { Runtime.trap("Consultancy form not found") };
      case (?form) {
        let updatedForm = {
          id = form.id;
          name = form.name;
          phoneNumber = form.phoneNumber;
          email = form.email;
          location = form.location;
          requirementMessage = form.requirementMessage;
          timestamp = form.timestamp;
          status;
        };
        consultancyForms.add(id, updatedForm);
      };
    };
  };

  public shared ({ caller }) func updatePartnerStatus(id : Nat, status : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can update partner status");
    };
    switch (partnerRegistrations.get(id)) {
      case (null) { Runtime.trap("Partner registration not found") };
      case (?registration) {
        let updatedRegistration = {
          id = registration.id;
          name = registration.name;
          companyName = registration.companyName;
          phoneNumber = registration.phoneNumber;
          email = registration.email;
          location = registration.location;
          businessDetails = registration.businessDetails;
          timestamp = registration.timestamp;
          status;
        };
        partnerRegistrations.add(id, updatedRegistration);
      };
    };
  };

  public query ({ caller }) func getConsultancyFormById(id : Nat) : async ConsultancyForm {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view consultancy forms");
    };
    switch (consultancyForms.get(id)) {
      case (null) { Runtime.trap("Consultancy form not found") };
      case (?form) { form };
    };
  };

  public query ({ caller }) func getPartnerRegistrationById(id : Nat) : async PartnerRegistration {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view partner registrations");
    };
    switch (partnerRegistrations.get(id)) {
      case (null) { Runtime.trap("Partner registration not found") };
      case (?registration) { registration };
    };
  };

  ////////////////////////////////////////////////////////////////////////////
  // AMC Enquiries
  ////////////////////////////////////////////////////////////////////////////
  public shared ({ caller }) func submitAmcEnquiry(clientName : Text, phoneNumber : Text, email : Text, location : Text, systemDetails : Text) : async Nat {
    // Public submission - no authorization required (guests can submit)
    let amcEnquiry : AmcEnquiry = {
      id = nextAmcEnquiryId;
      clientName;
      phoneNumber;
      email;
      location;
      systemDetails;
      timestamp = Time.now();
      status = "new";
    };

    amcEnquiries.add(nextAmcEnquiryId, amcEnquiry);
    nextAmcEnquiryId += 1;
    amcEnquiry.id;
  };

  // ------------------- ADMIN VIEW FUNCTION -------------------
  // Only Admin can call this - protected with admin authorization
  public query ({ caller }) func adminGetAllAmcEnquiries() : async [AmcEnquiry] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all AMC enquiries");
    };
    amcEnquiries.values().toArray().sort();
  };

  public query ({ caller }) func getAmcEnquiryById(id : Nat) : async AmcEnquiry {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view AMC enquiries");
    };
    switch (amcEnquiries.get(id)) {
      case (null) { Runtime.trap("AMC Enquiry not found") };
      case (?enquiry) { enquiry };
    };
  };

  public shared ({ caller }) func updateAmcEnquiryStatus(id : Nat, status : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can update AMC enquiry status");
    };
    switch (amcEnquiries.get(id)) {
      case (null) { Runtime.trap("AMC Enquiry not found") };
      case (?enquiry) {
        let updatedEnquiry = {
          id = enquiry.id;
          clientName = enquiry.clientName;
          phoneNumber = enquiry.phoneNumber;
          email = enquiry.email;
          location = enquiry.location;
          systemDetails = enquiry.systemDetails;
          timestamp = enquiry.timestamp;
          status;
        };
        amcEnquiries.add(id, updatedEnquiry);
      };
    };
  };

  ////////////////////////////////////////////////////////////////////////////
  // Offerings & Solutions
  ////////////////////////////////////////////////////////////////////////////
  let offerings = List.fromArray(["Residential Solar", "Commercial Solar", "Industrial Solar"]);
  let solutions = List.fromArray(["On-Grid Solar System", "Off-Grid Solar System", "Hybrid Solar System", "Solar Atta Chakki", "Solar Water Pump"]);

  public query func getAllOfferings() : async [Text] {
    // Public information - no authorization required
    offerings.toArray();
  };

  public query func getAllSolutions() : async [Text] {
    // Public information - no authorization required
    solutions.toArray();
  };
};
