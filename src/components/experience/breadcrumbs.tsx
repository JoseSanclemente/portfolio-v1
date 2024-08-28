import { BreadcrumsProperties } from "@/src/types/Breadcrumbs";

export default function Breadcrumbs({ itemsList }: BreadcrumsProperties) {
  return (
    <div className="mt-6 flex flex-wrap gap-x-3 gap-y-4 md:gap-x-6">
      {itemsList.map((item) => (
        <span className="gradient--border-show rounded-3xl px-4 py-3 text-sm leading-none">
          {item}
        </span>
      ))}
    </div>
  );
}
