const {Exchange, ExchangeMember, User} = require('./models/');

ExchangeMember.findAll({
    where: {
        exchange_id: 3,
        
    },
    raw: true,
    include: [
        {
            model: User,
            attributes: ['username']        
        }
    ]
})
.then(response => { 
    // const object = response;
    
    // const data = object.map(member => member.get({ plain: true }))
    // console.log('---------------------------------------------------------')
    // console.log(data);
    // console.log('---------------------------------------------------------')
    // var result = data.filter(obj => obj.member_id ==1 );
    console.log(response);
});