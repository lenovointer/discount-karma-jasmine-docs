1个不打折
2个95折
3个9折
4个8折
5个7.5折

C.U.T Homework:
To try and encourage more sales of the 5 different Security Service they sell (APT/WAF/DBScan/WebScan/USMB), salesman in our company has decided to offer discounts of multiple-service purchases.
One copy of any of the five services costs 10 BTC.
If, however, you buy two different services, you get a 5% discount on those two services.
If you buy 3 different services, you get a 10% discount.
If you buy 4 different services, you get a 20% discount.
If you go the whole hog, and buy all 5, you get a huge 25% discount.
Note that if you buy, say, four services, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth service still costs 10 BTC.
Your mission is to write a piece of code to calculate the price of any conceivable shopping list, giving as big a discount as possible. We focus on your JavaScript coding skill and code logic, and it's better if you can work with a unit test framework like Jasmine. We wanna you present your code with a github repository in the end.
For example, how much does this list of services cost?
2 copies of the APT service, 2 copies of the WAF service, 2 copies of the WebSCAN service, 1 copy of the DBScan service, 1 copy of the USMB service. One way of group these 8 services is:
1 group of 5 --> 25% discount (APT,WAF,DBScan,WebScan,USMB) +1 group of 3 --> 10% discount (APT,WAF,DBScan) This would give a total of
5 services at a 25% discount +3 services at a 10% discount Giving
5 x (10 - 2.50) == 5 x 7.50 == 37.50 +3 x (10 - 1.00) == 3 x 9.00 == 27.00 For a total of 64.50
However, a different way to group these 8 services is:
1 group of 4 services --> 20% discount (APT,WAF,DBScan,WebScan) +1 group of 4 services -- > 20% discount (APT,WAF,DBScan,USMB) This would give a total of
4 services at a 20% discount +4 services at a 20% discount Giving
4 x (10-2.00) == 4 x 8.00 == 32.00 +4 x (10-2.00) == 4 x 8.00 == 32.00 For a total of 64.00 And 64.00 is the price with the biggest discount.
