const SpamCheck = (Title) => {
    const Content = Title.split(" ").map((item) => {
        if(item.length > 9){
            return true
        }
        return false
    })

    if(Content.includes(true)){
        return true
    }else{
        return false
    }
}


export default SpamCheck