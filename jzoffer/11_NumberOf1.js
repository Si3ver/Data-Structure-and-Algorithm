function NumberOf1(n)
{
   let cnt = 0
   while (n) {
       ++cnt
       n = n & (n-1)
   }
   return cnt
}