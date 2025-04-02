import { Skeleton } from "@/components/ui/skeleton"

export function ProjectCardSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
      {/* Image skeleton */}
      <div className="h-48 w-full">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <Skeleton className="h-7 w-3/4" />

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>

        {/* Actions */}
        <div className="flex justify-between pt-2">
          <Skeleton className="h-10 w-28 rounded-md" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectDetailSkeleton() {
  return (
    <div className="space-y-8">
      {/* Back button skeleton */}
      <Skeleton className="h-8 w-32" />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image skeleton */}
        <div className="md:w-1/2">
          <Skeleton className="h-[400px] w-full rounded-xl" />
        </div>

        {/* Content skeleton */}
        <div className="md:w-1/2 space-y-6">
          {/* Title */}
          <Skeleton className="h-10 w-3/4" />

          {/* Status */}
          <div className="flex items-center">
            <Skeleton className="h-6 w-32 rounded-full" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-2/3" />
          </div>

          {/* Technologies */}
          <div>
            <Skeleton className="h-7 w-40 mb-3" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-8 w-24 rounded-full" />
              <Skeleton className="h-8 w-32 rounded-full" />
              <Skeleton className="h-8 w-28 rounded-full" />
              <Skeleton className="h-8 w-20 rounded-full" />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4">
            <Skeleton className="h-12 w-32 rounded-md" />
            <Skeleton className="h-12 w-32 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}

