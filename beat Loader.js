const Leaderboard = () => {
  useEffect(() => {
    const getLeaderboardData = async () => {
      const url = "https://apis2.ccbp.in/leaderboard-v2"
      const response = await fetch(url, options)
      const responseData = await response.json()
      console.log(responseData)
    }
    getLeaderboardData()
