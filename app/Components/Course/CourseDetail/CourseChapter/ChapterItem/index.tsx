import { CourseChapter } from '@/app/Models/Course';
import CourseManager from '@/app/Helpers/CourseManager';
import { Disclosure } from '@headlessui/react';
import * as Icons from 'react-icons/md';
interface ChapterItemProps {
  chapter: CourseChapter;
  index: any;
}

// Manager Function About Course , Chapter
const newCourseManager = new CourseManager();

const ChapterItem: React.FC<ChapterItemProps> = ({ chapter, index }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className=" flex capitalize items-center w-full justify-between rounded-lg px-5 py-2.5 text-left text-xl font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 light:bg-purple-100 light:text-purple-900 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-800 dark:focus-visible:ring-purple-500/75">
            <span>
              {index + 1}. {chapter.name}
            </span>
            <Icons.MdArrowDownward
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-7 w-7 text-purple-500`}
            />
          </Disclosure.Button>
          {chapter.sections.map((section, index, array) => {
            return (
              <Disclosure.Panel
                key={section._id}
                className="px-4 pt-4 pb-2 text-sm text-gray-500 "
              >
                <section className="flex flex-col space-y-1">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-lg">
                      {index + 1}. {section.name}
                    </span>
                    <section className="flex items-center gap-4">
                      <span>
                        {newCourseManager.convertMillisecondsToTime(
                          section.video.duration
                        )}
                      </span>
                      <span>
                        <Icons.MdLock />
                      </span>
                    </section>
                  </div>
                  {index !== array.length - 1 && (
                    <span className="w-full h-[0.5px] bg-gray-500 opacity-20"></span>
                  )}
                </section>
              </Disclosure.Panel>
            );
          })}
        </>
      )}
    </Disclosure>
  );
};

export default ChapterItem;
