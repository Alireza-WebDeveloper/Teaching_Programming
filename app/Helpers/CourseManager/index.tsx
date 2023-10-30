class CourseManager {
  convertMillisecondsToTime = (milliseconds: number) => {
    const totalSeconds = milliseconds / 1000;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(
      minutes
    ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
  };
  calculatorTotalDurationVideos = (chapters: any) => {
    const { totalDurationVidoes } = chapters.reduce(
      (help: any, chapter: any) => {
        help.totalDurationVidoes += chapter.totalVideoDuration;
        return help;
      },
      { totalDurationVidoes: 0 }
    );
    return this.convertMillisecondsToTime(totalDurationVidoes);
  };
}

export default CourseManager;
