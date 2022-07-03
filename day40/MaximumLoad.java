
/**
 Maximum CPU Load (hard)#
We are given a list of Jobs. Each job has a Start time, an End time, 
and a CPU load when it is running. Our goal is to find the maximum CPU 
load at any time if all the jobs are running on the same machine.

Example 1:
Jobs: [[1,4,3], [2,5,4], [7,9,6]]
Output: 7
Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the 
jobs are running at the same time i.e., during the time interval (2,4).

Example 2:
Jobs: [[6,7,10], [2,4,11], [8,12,15]]
Output: 15
Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.
*/
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
    for (Job job : jobs) {
      while (!minHeap.isEmpty() && job.start > minHeap.peek().end) {
        currentLoad -= minHeap.poll().cpuLoad;
      }

      minHeap.offer(job);
      currentLoad += job.cpuLoad;
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