const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const Profile = require('../../models/Profile')
// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/', auth, (req, res) => { r
    try {
        const profile = await Profile.findOne({ user: req.user.id })
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

module.exports = router