import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ConsultancyForm, PartnerRegistration, AmcEnquiry } from '../backend';

export function useSubmitConsultancyForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; phoneNumber: string; email: string; location: string; requirementMessage: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitConsultancyForm(data.name, data.phoneNumber, data.email, data.location, data.requirementMessage);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminConsultancyForms'] });
    },
  });
}

export function useSubmitPartnerRegistration() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; companyName: string; phoneNumber: string; email: string; location: string; businessDetails: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitPartnerRegistration(data.name, data.companyName, data.phoneNumber, data.email, data.location, data.businessDetails);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminPartnerRegistrations'] });
    },
  });
}

export function useSubmitAmcEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { clientName: string; phoneNumber: string; email: string; location: string; systemDetails: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitAmcEnquiry(data.clientName, data.phoneNumber, data.email, data.location, data.systemDetails);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminAmcEnquiries'] });
    },
  });
}

// Admin-only queries - these call the admin-protected backend methods
export function useGetAllConsultancyForms(enabled: boolean = true) {
  const { actor, isFetching } = useActor();

  return useQuery<ConsultancyForm[]>({
    queryKey: ['adminConsultancyForms'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.adminGetAllConsultancyForms();
    },
    enabled: !!actor && !isFetching && enabled,
    retry: false,
  });
}

export function useGetAllPartnerRegistrations(enabled: boolean = true) {
  const { actor, isFetching } = useActor();

  return useQuery<PartnerRegistration[]>({
    queryKey: ['adminPartnerRegistrations'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.adminGetAllPartnerRegistrations();
    },
    enabled: !!actor && !isFetching && enabled,
    retry: false,
  });
}

export function useGetAllAmcEnquiries(enabled: boolean = true) {
  const { actor, isFetching } = useActor();

  return useQuery<AmcEnquiry[]>({
    queryKey: ['adminAmcEnquiries'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.adminGetAllAmcEnquiries();
    },
    enabled: !!actor && !isFetching && enabled,
    retry: false,
  });
}

export function useGetAllOfferings() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['offerings'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllOfferings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllSolutions() {
  const { actor, isFetching } = useActor();

  return useQuery<string[]>({
    queryKey: ['solutions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSolutions();
    },
    enabled: !!actor && !isFetching,
  });
}
