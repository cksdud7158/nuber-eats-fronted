import { gql, useQuery } from "@apollo/client";
import { meQuery } from "../__generated__/meQuery";

// useMe 가 호출되었을 떄 아폴로 캐시에 해당 데이터가 있으면 그걸 사용, 없으면 쿼리 호출
export const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`;

export const useMe = () => {
  return useQuery<meQuery>(ME_QUERY);
};
