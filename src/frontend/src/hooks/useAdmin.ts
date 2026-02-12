import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';

export function useIsCallerAdmin() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity, isInitializing } = useInternetIdentity();

  const query = useQuery<boolean>({
    queryKey: ['isCallerAdmin', identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !actorFetching && !!identity && !isInitializing,
    retry: false,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  return {
    ...query,
    isLoading: actorFetching || isInitializing || query.isLoading,
    isFetched: !!actor && !actorFetching && !!identity && !isInitializing && query.isFetched,
  };
}
