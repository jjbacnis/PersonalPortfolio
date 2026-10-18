module.exports.indexMessage = function (req, res, next) {
    res.json(
        {
            welcome: 'This is the index page for the application.',
            message: 'Please use the following endpoints to access the backend API:',
            endpoints: {
                references: {
                    'POST ==== /api/references': 'Add a new reference',
                    'GET ==== /api/references': 'Get all references',
                    'GET ==== /api/references/:id': 'Get a reference by ID',
                    'PUT ==== /api/references/:id': 'Update a reference by ID',
                    'DELETE ==== /api/references/:id': 'Delete a reference by ID'
                },
                projects: {
                    'POST ==== /api/projects': 'Add a new project',
                    'GET ==== /api/projects': 'Get all projects',
                    'GET ==== /api/projects/:id': 'Get a project by ID',
                    'PUT ==== /api/projects/:id': 'Update a project by ID',
                    'DELETE ==== /api/projects/:id': 'Delete a project by ID'
                },
                services: {
                    'POST ==== /api/services': 'Add a new service',
                    'GET ==== /api/services': 'Get all services',
                    'GET ==== /api/services/:id': 'Get a service by ID',
                    'PUT ==== /api/services/:id': 'Update a service by ID',
                    'DELETE ==== /api/services/:id': 'Delete a service by ID'
                },
                users: {
                    'POST ==== /api/users': 'Add a new user',
                    'GET ==== /api/users': 'Get all users',
                    'GET ==== /api/users/:id': 'Get a user by ID',
                    'PUT ==== /api/users/:id': 'Update a user by ID',
                    'DELETE ==== /api/users/:id': 'Delete a user by ID'
                }
            }
        }
    );
}
