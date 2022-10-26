const asyncHandler = require("express-async-handler") 

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler( async (req, res) => {
    res.json("Get goals")
})

// @desc Add goal
// @route POST /api/goals
// @access Private
const addGoal = asyncHandler( async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Add text field")
    }
    res.json("Add")
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler( async (req, res) => {
    res.json("Update")
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req, res) => {
    res.json("Delete")
})





module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
}