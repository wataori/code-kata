class Array
  def quicksort
    return self if count <= 1
    pivot = pop
    higher, lower = partition{|n| n >= pivot}
    lower.quicksort + [pivot] + higher.quicksort
  end
end

# p [100, 0, 5, 3, 10, 11, 41, 1, 2, 8, -1].quicksort
p (1..100).to_a.shuffle.quicksort
