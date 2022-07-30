// impliment count that prints number from start to end without using inbuild loops/ iterators
/**
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns 
 */
function counter(start, end) {
  if (start > end) return;

  console.log(start);
  counter(start + 1, end);
}

counter(2, 5);
