def get_list_difference(first_list, second_list):
    list_length = len(first_list)
    for shift in range(list_length):
        first_part = first_list[:list_length-shift]
        second_part = second_list[shift:]
        if first_part == second_part:
            return second_list[:shift]
    return second_list

print(get_list_difference([7,1,7,7],[3,3,3,3]))
