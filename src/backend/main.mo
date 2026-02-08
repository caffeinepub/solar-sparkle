import MixinStorage "blob-storage/Mixin";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import List "mo:core/List";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";



actor {
  include MixinStorage();

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

  let consultancyForms = Map.empty<Nat, ConsultancyForm>();
  let partnerRegistrations = Map.empty<Nat, PartnerRegistration>();

  var nextConsultancyId = 1;
  var nextPartnerId = 1;

  public shared ({ caller }) func submitConsultancyForm(name : Text, phoneNumber : Text, email : Text, location : Text, requirementMessage : Text) : async Nat {
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

  public query ({ caller }) func getAllConsultancyForms() : async [ConsultancyForm] {
    consultancyForms.values().toArray().sort();
  };

  public query ({ caller }) func getAllPartnerRegistrations() : async [PartnerRegistration] {
    partnerRegistrations.values().toArray().sort();
  };

  public shared ({ caller }) func updateConsultancyStatus(id : Nat, status : Text) : async () {
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
    switch (consultancyForms.get(id)) {
      case (null) { Runtime.trap("Consultancy form not found") };
      case (?form) { form };
    };
  };

  public query ({ caller }) func getPartnerRegistrationById(id : Nat) : async PartnerRegistration {
    switch (partnerRegistrations.get(id)) {
      case (null) { Runtime.trap("Partner registration not found") };
      case (?registration) { registration };
    };
  };

  let offerings = List.fromArray(["Residential Solar", "Commercial Solar", "Industrial Solar"]);
  let solutions = List.fromArray(["On-Grid Solar System", "Off-Grid Solar System", "Hybrid Solar System", "Solar Atta Chakki", "Solar Water Pump"]);

  public query ({ caller }) func getAllOfferings() : async [Text] {
    offerings.toArray();
  };

  public query ({ caller }) func getAllSolutions() : async [Text] {
    solutions.toArray();
  };
};
