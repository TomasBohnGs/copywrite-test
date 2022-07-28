const { Router } = require('express');

const router = Router();


router.get('/iecho', (req, res, next) => {
    const { text } = req.query;
    try {
        if(text.length > 0){
            let reverse = text.split('').reverse().join('');
            let isPalindrome = text.toLowerCase() === reverse.toLowerCase();
            
            res.status(200).json({
                text: reverse,
                palindrome: isPalindrome
            })
        } else{
            res.status(400).json({error: "no text"});
        }
    } catch (error) {
        
    }
})

module.exports = router;