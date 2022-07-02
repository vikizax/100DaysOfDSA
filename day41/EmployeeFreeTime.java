import java.util.*;

class Interval {
    int start;
    int end;

    public Interval(int start, int end) {
        this.start = start;
        this.end = end;
    }
};

class EmployeeInterval {
    Interval interval;
    int employeeIndex;
    int intervalIndex;

    public EmployeeInterval(Interval interval, int employeeIndex, int intervalIndex) {
        this.employeeIndex = employeeIndex;
        this.intervalIndex = intervalIndex;
        this.interval = interval;
    }
}

public class EmployeeFreeTime {

    public static List<Interval> findEmployeeFreeTime(List<List<Interval>> schedule) {
        if (schedule == null || schedule.size() == 0)
            return null;

        PriorityQueue<EmployeeInterval> minHeap = new PriorityQueue<>(
                (a, b) -> Integer.compare(a.interval.end, b.interval.end));

        // store the first interval of all employee to the min heap
        for (int empIndex = 0; empIndex < schedule.size(); empIndex++) {
            minHeap.offer(new EmployeeInterval(schedule.get(empIndex).get(0), empIndex, 0));
        }

        List<Interval> result = new ArrayList<>();

        // keep the previous interval for comparing the next interval
        // that finishes first
        Interval previousInterval = minHeap.peek().interval;
        while (!minHeap.isEmpty()) {
            // get the top interval
            EmployeeInterval currentTop = minHeap.poll();
            // if interval does not overlap : free time condition
            if (previousInterval.end < currentTop.interval.start) {
                result.add(new Interval(previousInterval.end, currentTop.interval.start));
                previousInterval = currentTop.interval;
            } else {
                // if interval overlaps
                if (previousInterval.end < currentTop.interval.end)
                    previousInterval = currentTop.interval;
            }

            // add the next interval for the current employee if exist more
            List<Interval> employeeSchedule = schedule.get(currentTop.employeeIndex);
            if (employeeSchedule.size() > currentTop.intervalIndex + 1) {
                minHeap.offer(
                        new EmployeeInterval(schedule.get(currentTop.employeeIndex).get(currentTop.intervalIndex + 1),
                                currentTop.employeeIndex,
                                currentTop.intervalIndex + 1));
            }
        }
        return result;
    }

    public static void main(String[] args) {

        List<List<Interval>> input = new ArrayList<>();
        input.add(new ArrayList<Interval>(Arrays.asList(new Interval(1, 3), new Interval(5, 6))));
        input.add(new ArrayList<Interval>(Arrays.asList(new Interval(2, 3), new Interval(6, 8))));
        List<Interval> result = EmployeeFreeTime.findEmployeeFreeTime(input);
        System.out.print("Free intervals: ");
        for (Interval interval : result)
            System.out.print("[" + interval.start + ", " + interval.end + "] ");
        System.out.println();

        input = new ArrayList<>();
        input.add(new ArrayList<Interval>(Arrays.asList(new Interval(1, 3), new Interval(9, 12))));
        input.add(new ArrayList<Interval>(Arrays.asList(new Interval(2, 4))));
        input.add(new ArrayList<Interval>(Arrays.asList(new Interval(6, 8))));
        result = EmployeeFreeTime.findEmployeeFreeTime(input);
        System.out.print("Free intervals: ");
        for (Interval interval : result)
            System.out.print("[" + interval.start + ", " + interval.end + "] ");
        System.out.println();

        input = new ArrayList<>();
        input.add(new ArrayList<Interval>(Arrays.asList(new Interval(1, 3))));
        input.add(new ArrayList<Interval>(Arrays.asList(new Interval(2, 4))));
        input.add(new ArrayList<Interval>(Arrays.asList(new Interval(3, 5), new Interval(7, 9))));
        result = EmployeeFreeTime.findEmployeeFreeTime(input);
        System.out.print("Free intervals: ");
        for (Interval interval : result)
            System.out.print("[" + interval.start + ", " + interval.end + "] ");
    }
}
