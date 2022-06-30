import java.util.*;

class Job {
  int start;
  int end;
  int cpuLoad;

  public Job(int start, int end, int cpuLoad) {
    this.start = start;
    this.end = end;
    this.cpuLoad = cpuLoad;
  }
};

class MaximumCPULoad {

  public static int findMaxCPULoad(List<Job> jobs) {
    if (jobs == null || jobs.size() == 0)
      return 0;

    // jobs sort in asc based on start time
    Collections.sort(jobs, (a, b) -> Integer.compare(a.start, b.start));
    PriorityQueue<Job> minHeap = new PriorityQueue<>(jobs.size(), (a, b) -> Integer.compare(a.end, b.end));
    int maxLoad = 0;  
    int currentLoad = 0;  
    for(Job job: jobs) {
      while(!minHeap.isEmpty() && job.start > minHeap.peek().end) {
        currentLoad -= minHeap.poll().cpuLoad;
      }

      minHeap.offer(job);
      currentLoad+= job.cpuLoad;
      maxLoad = Math.max(currentLoad, maxLoad);
    }

    return maxLoad;
  }

  public static void main(String[] args) {
    List<Job> input = new ArrayList<Job>(Arrays.asList(new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)));
    System.out.println("Maximum CPU load at any time: " + MaximumCPULoad.findMaxCPULoad(input));

    input = new ArrayList<Job>(Arrays.asList(new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)));
    System.out.println("Maximum CPU load at any time: " + MaximumCPULoad.findMaxCPULoad(input));

    input = new ArrayList<Job>(Arrays.asList(new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)));
    System.out.println("Maximum CPU load at any time: " + MaximumCPULoad.findMaxCPULoad(input));
  }
}