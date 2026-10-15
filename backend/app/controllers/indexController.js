module.exports.helloWorld = function (req, res, next) {
    res.send('Hello World!');
};


module.exports.welcome = function (req, res, next) {
    res.send('Welcome to My Portfolio Backend');
};

module.exports.references = function (req, res, next) {
    res.json({
        success: true,
        message: 'References retrieved successfully',
        data: [
            {
                name: 'John Doe',
                title: 'Software Engineer',
                company: 'Tech Company',
                email: 'john.doe@example.com'
            },
            {
                name: 'Jane Smith',
                title: 'Project Manager',
                company: 'Business Inc.',
                email: 'jane.smith@example.com'
            }
        ]
    });
};
