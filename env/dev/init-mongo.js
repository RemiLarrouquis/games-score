db.createUser(
	{
		user: "games",
		pwd: "games",
		roles: [
			{
				role: "readWrite",
				db: "games"
			}
		]
	}
)