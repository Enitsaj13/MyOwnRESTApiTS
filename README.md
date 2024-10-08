my-own-rest-api-ts/
│
├── src/
│   ├── config/            # Configuration files (e.g., database, environment, etc.)
│   │   └── db.ts          # Database connection configuration
│   │   └── env.ts         # Environment variables configuration
│   │
│   ├── controllers/       # Controllers for request handling
│   │   └── user.controller.ts  # Example controller for users
│   │
│   ├── models/            # Data models (e.g., using ORM/ODM or raw SQL queries)
│   │   └── user.model.ts    # Example user model (for database interaction)
│   │
│   ├── routes/            # Routes definitions (usually mapped to controllers)
│   │   └── user.routes.ts   # Example user routes
│   │   └── index.ts        # Main route index
│   │
│   ├── services/          # Business logic, separate from controllers
│   │   └── user.service.ts  # Example user service
│   │
│   ├── middlewares/       # Middleware functions (authentication, validation, etc.)
│   │   └── auth.middleware.ts # Example authentication middleware
│   │
│   ├── utils/             # Utility functions, helpers, or common functions
│   │   └── hash.util.ts     # Example utility for password hashing
│   │
│   ├── types/        # TypeScript interfaces and types for strong typing
│   │   └── user.types.ts # Example user-related types and interfaces
│   │
│   ├── tests/             # Unit and integration tests
│   │   └── userController.test.ts # Example test file
│   │
│   ├── app.ts             # Main app setup (Express configuration)
│   └── server.ts          # Server setup and initialization
│
├── dist/                  # Compiled JavaScript files (output of TypeScript)
├── node_modules/          # Installed dependencies
├── .env                   # Environment variables
├── .gitignore             # Files and directories to ignore in version control
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
