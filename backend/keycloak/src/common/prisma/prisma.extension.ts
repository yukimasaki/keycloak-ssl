import { Prisma } from "@prisma/client";

type PaginationResult<T, A> = {
  items: Prisma.Result<T, A, "findMany">;
  count: number;
  pageCount: number;
};

export const paginate = Prisma.defineExtension({
  name: 'paginate',
  model: {
    $allModels: {
      async paginate<T, A>(
        this: T,
        args: Prisma.Exact<A, Prisma.Args<T, "findMany">> & {
          page: number;
          perPage: number;
        }
      ): Promise<PaginationResult<T, A>> {
        const { page, perPage } = args;

        const [items, count] = await Promise.all([
          (this as any).findMany({
            // omitの実装は省略
            // ...omit(args, "page", "perPage"),
            skip: perPage * (page - 1),
            take: perPage,
          }),
          (this as any).count({ where: (args as any).where }),
        ]);
        const pageCount = Math.ceil(count / perPage);

        return { items, count, pageCount };
      },
    },
  },
});
