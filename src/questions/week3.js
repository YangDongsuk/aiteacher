const questionNumber3 = {
  question: `
  밑의 코드에서 #student answer1,2,3를 채워 넣으세요.
    num_list1=[]
    num_list2=[]
    num_list3=[]
    
    for i in range(1,51):
        if #student answer1
            num_list1.append(i)
        if #student answer2
            num_list2.append(i)
        if #student answer3
            num_list3.append(i) 
    print("50까지의 수에서 짝수이면서 3의 배수는 : ₩n",num_list1)
    print("50까지의 수에서 3의 배수이거나 7의 배수는 : ₩n",num_list2)
    print("50까지의 수에서 5의 배수가 아닌 수는 : ₩n",num_list3)`,
  answerCode: `
    num_list1=[]
    num_list2=[]
    num_list3=[]
    
    for i in range(1,51):
        if i%2==0 and i%3==0:
            num_list1.append(i)
        if i%3==0 or i%7==0:
            num_list2.append(i)
        if i%5!=0:
            num_list3.append(i) 
    print("50까지의 수에서 짝수이면서 3의 배수는 : ₩n",num_list1)
    print("50까지의 수에서 3의 배수이거나 7의 배수는 : ₩n",num_list2)
    print("50까지의 수에서 5의 배수가 아닌 수는 : ₩n",num_list3)`,
  answerOutput: `
    50까지의 수에서 짝수이면서 3의 배수는 : ₩n [6, 12, 18, 24, 30, 36, 42, 48]
    50까지의 수에서 3의 배수이거나 7의 배수는 : ₩n [3, 6, 7, 9, 12, 14, 15, 18, 21, 24, 27, 28, 30, 33, 35, 36, 39, 42, 45, 48, 49]
    50까지의 수에서 5의 배수가 아닌 수는 : ₩n [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24, 26, 27, 28, 29, 31, 32, 33, 34, 36, 37, 38, 39, 41, 42, 43, 44, 46, 47, 48, 49]
    `,
};
export default questionNumber3;
