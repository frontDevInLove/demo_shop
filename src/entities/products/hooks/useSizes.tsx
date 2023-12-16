import { useQuery } from "react-query";
import { fetchSizes } from "@/entities/products/api/product.service";
import { Size } from "@/entities/products/models";

export const useSizes = () => {
  const { data, isLoading, isError } = useQuery("sizes", fetchSizes, {
    select: (data) => {
      // Трансформация данных в формат [id]: Size
      return data.reduce(
        (acc, size) => {
          acc[size.id] = size;
          return acc;
        },
        {} as Record<number, Size>,
      );
    },
  });

  return {
    sizes: data,
    isLoading,
    isError,
  };
};
