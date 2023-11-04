data_list = [1,22,54,667,8,3,2,0,33,5]

"""
Binary Search
"""
def binary_search(items: list, search_element: int, to_sort:bool=True,logs: bool=False):
    sorted_list = list(items)
    if to_sort:
        sorted_list.sort()
    right = 0
    left = len(sorted_list) - 1

    while right <= left:
        mid = round((right + left) / 2)
        if logs:
            print(f'right:{right} mid:{mid} left:{left}')
        if sorted_list[mid] == search_element:
            return mid
        if mid > search_element:
            left = mid - 1
            continue
        if mid < search_element:
            right = mid + 1
    return -1

print(binary_search(data_list, 667, False))
print(binary_search(data_list, 667))
