import { IBaseFilter } from '@base/interfaces';
import { MutationConfig, queryClient } from '@lib/config';
import { useMutation } from '@tanstack/react-query';
import { CartService } from './services';

export const CartHook = {
  useBulkFind: ({
    options,
    config = {},
  }: {
    options: IBaseFilter;
    config?: MutationConfig<typeof CartService.bulkFind>;
  }) => {
    return useMutation({
      ...config,
      mutationFn: (payload) => CartService.bulkFind(payload, options),
      onSettled: (data) => {
        if (!data?.success) return;

        queryClient.invalidateQueries({ queryKey: [CartService.NAME, options] });
      },
    });
  },
};
