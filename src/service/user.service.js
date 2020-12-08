const connection 
class UserService {
    async create(user) {
        //将user存储到数据库中 
        const {name,password} = user;
        const statement = `INSERT INTO users (name,password) VALUES (?,?)`
        return "创建用户成功"
    }
}
module.exports = new UserService()