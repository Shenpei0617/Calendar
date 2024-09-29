const user = [
    { firstName: 'John', lastName: 'Doe', customerID: '123', note: '', profession: 'student' },
    { firstName: 'Alice', lastName: 'Smith', customerID: '234', note: 'VIP', profession: 'freelancer' },
    { firstName: 'Bob', lastName: '', customerID: '001', note: 'New', profession: 'productOwner' },
    { firstName: 'Kate', lastName: 'Lee', customerID: '789', note: '', profession: 'engineer' },
    { firstName: 'Mary', lastName: 'Jones', customerID: '456', note: 'Loyal', profession: 'systemAnalytics' }
  ];
  
  //1-Q1
  function sortUserName(user) {
    const userSort = user.map(person => {
        return person.firstName + person.lastName + person.customerID;
    });
    const newUser = userSort.sort()
    console.log('Q1newUser', newUser)
    return newUser
  }

  sortUserName(user)

  //1-Q2
  function sortByType(user) {
    const  newUserOrder = {
      'systemAnalytics': 1,
      'engineer': 2,
      'productOwner': 3,
      'freelancer': 4,
      'student': 5
    };

    const nweUser = user.sort((next , start)=>{
      return newUserOrder[next.profession]-newUserOrder[start.profession]
    })
    console.log('nweUser', nweUser)
  }
  sortByType(user)

  //2 見explain.txt

  //3
  let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];

  function getUniqueNumber (items) {
    return items = [...new Set(items)];
  }

  //方法二
  // function getUniqueNumber (items) {
  //   return items.filter((item, index) => {
  //     return items.indexOf(item) === index;
  //   });
  // }
  let newItems = getUniqueNumber(items);
  console.log('newItems', newItems)

  //4 見explain.txt

  //5 見explain.txt

  //6見 JS/search.js

