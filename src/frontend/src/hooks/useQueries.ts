import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ConsultancyForm, PartnerRegistration } from '../backend';

export function useSubmitConsultancyForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; phoneNumber: string; email: string; location: string; requirementMessage: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitConsultancyForm(data.name, data.phoneNumber, data.email, data.location, data.requirementMessage);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['consultancyForms'] });
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
      queryClient.invalidateQueries({ queryKey: ['partnerRegistrations'] });
    },
  });
}

export function useGetAllConsultancyForms() {
  const { actor, isFetching } = useActor();

  return useQuery<ConsultancyForm[]>({
    queryKey: ['consultancyForms'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllConsultancyForms();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllPartnerRegistrations() {
  const { actor, isFetching } = useActor();

  return useQuery<PartnerRegistration[]>({
    queryKey: ['partnerRegistrations'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPartnerRegistrations();
    },
    enabled: !!actor && !isFetching,
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
