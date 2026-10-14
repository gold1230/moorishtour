import {
  ClockIcon,
  CakeIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

interface ItineraryDay {
  title: string;
  description: string;
  details?: string[];
}

interface TourItineraryProps {
  title: string;
  days: ItineraryDay[];
}

export default function TourItinerary( {
  title,
  days
}: TourItineraryProps) {
  return (
    <div >

      {/* Section Title */}
      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        {title} Ititnerary:
      </h2>

      <div className="relative">

        {/* Vertical Line */}
        <div
          className="
            absolute
            left-7.5
            top-8
            bottom-8
            hidden
            w-0.5
            bg-orange-200
            md:block
          "
        />

        <div className="space-y-8">

          {days.map((day, index) => {

            // Automatically creates 1, 2, 3...
            const dayNumber = index + 1;

            return (
              <div
                key={`${day.title}-${index}`}
                className="relative flex gap-5 md:gap-7"
              >

                {/* Day Circle */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-15
                    w-15
                    shrink-0
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    bg-amber-600
                    text-white
                    shadow-sm
                  "
                >
                  <span className="text-xs font-medium">
                    Day
                  </span>

                  <span className="text-xl font-bold leading-5">
                    {dayNumber}
                  </span>
                </div>


                {/* Content */}

                <div className="min-w-0 flex-1 pt-1">

                  {/* Title */}

                  <h3 className="text-base font-bold text-slate-900 md:text-lg">
                    {day.title}
                  </h3>


                  {/* Description */}

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-900 md:text-[15px]">
                    {day.description}
                  </p>


                  {/* Details */}

                  {day.details && day.details.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-x-7 gap-y-2">

                      {day.details.map((detail, detailIndex) => {

                        // Different icon depending on position
                        const Icon =
                          detailIndex === 0
                            ? ClockIcon
                            : detailIndex === 1
                            ? SparklesIcon
                            : CakeIcon;

                        return (
                          <div
                            key={`${detail}-${detailIndex}`}
                            className="flex items-center gap-2 text-sm text-amber-600"
                          >
                            <Icon
                              className="h-4 w-4 text-amber-600"
                              aria-hidden="true"
                            />

                            <span>{detail}</span>
                          </div>
                        );
                      })}

                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}