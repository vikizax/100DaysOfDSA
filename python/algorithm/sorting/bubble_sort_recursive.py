def bubble_sort_recursive(items: list, len: int):
    if len == 1:
        return

    swapped = False
    for i in range(len - 1):
        if items[i] > items[i+1]:
            items[i], items[i+1] = items[i+1], items[i]
            swapped = True

    if swapped == False:
        return 
    
    bubble_sort_recursive(items, len - 1)
    
to_sorted = [64, 34, 25, 12, 22, 90, 11]
print(f'List before sorting {to_sorted}')
bubble_sort_recursive(to_sorted, len(to_sorted))
print(f'Sorted List {to_sorted}')