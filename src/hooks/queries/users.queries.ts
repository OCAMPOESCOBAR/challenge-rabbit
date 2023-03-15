import { useQuery, UseQueryResult } from "react-query";
import { UserService } from "../../services/user.service";
import { TUser, TUserParams } from "../../types/entities.type";

export const useMe = (params?: TUserParams): UseQueryResult<TUser, unknown> => {
    return useQuery({
      queryKey: ['me', params],
      queryFn: () => UserService.getMe(params),
      retry: false,
      cacheTime: 0,
      refetchOnWindowFocus: false,
    });
  };