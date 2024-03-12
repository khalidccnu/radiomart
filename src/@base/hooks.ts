import { MutationConfig, QueryConfig, queryClient } from '@lib/config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IBaseServices, TId } from './interfaces';

export const UseBaseHooks = <Entity, FilterOptions, CreatePayload, UpdatePayload = CreatePayload>(
  service: IBaseServices<Entity, FilterOptions, CreatePayload, UpdatePayload>,
) => {
  const useFindById = ({ id, config }: { id: TId; config?: QueryConfig<typeof service.findById> }) => {
    return useQuery({
      ...config,
      queryKey: [service.findById.name, id],
      queryFn: () => service.findById(id),
    });
  };

  const useFind = ({ options, config }: { options: FilterOptions; config?: QueryConfig<typeof service.find> }) => {
    return useQuery({
      ...config,
      queryKey: [service.END_POINT, options],
      queryFn: () => service.find(options),
    });
  };

  const useCreate = ({ config }: { config?: MutationConfig<typeof service.create> } = {}) => {
    return useMutation({
      ...config,
      mutationFn: (payload) => service.create(payload),
      onSettled: (data) => {
        if (!data?.success) return;

        queryClient.invalidateQueries({ queryKey: [service.END_POINT] });
      },
    });
  };

  const useUpdate = ({ config }: { config?: MutationConfig<typeof service.update> } = {}) => {
    return useMutation({
      ...config,
      mutationFn: (payload) => service.update(payload),
      onSettled: (data) => {
        if (!data?.success) return;

        queryClient.invalidateQueries({ queryKey: [service.END_POINT] });
      },
    });
  };

  const useDelete = ({ config }: { config?: MutationConfig<typeof service.delete> } = {}) => {
    return useMutation({
      ...config,
      mutationFn: (payload) => service.delete(payload),
      onSettled: (data) => {
        if (!data?.success) return;

        queryClient.invalidateQueries({ queryKey: [service.END_POINT] });
      },
    });
  };

  return { useFindById, useFind, useCreate, useUpdate, useDelete };
};
