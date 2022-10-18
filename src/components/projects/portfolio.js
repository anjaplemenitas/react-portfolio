import oddrecipe from '../../assets/oddrecipe/oddrecipefirstphoto.png'
import allgames from '../../assets/gamesinthedungeon/allgames.png'

const data = [
  {
    key: 1,
    id: 1,
    image: oddrecipe,
    title: 'OddRecipe',
    type: 'WebApp',
    made_with: ['Rails', 'Ruby', 'HTML', 'Css', 'JavaScript'],
    details: [
      'web app that is helping reduce food waste - inspired by OddBox sustainable company',
      'coming up with the idea and created a whole visual aspect of it',
    ],
    github: 'https://github.com/anjaplemenitas/OddRecipe/blob/master/README.md',
    link: 'https://www.youtube.com/watch?v=f_PJcHAoMx8',
  },

  {
    key: 2,
    id: 2,
    image: allgames,
    title: 'Games in the Dungeon',
    type: 'Web',
    made_with: ['Rails', 'Ruby', 'HTML', 'Css'],
    details: [
      'Rent, buy or create board games on the Dungeon of Games website. My input was in most parts of development, but I worked mostly on the frontend, creating visuals for the website',
    ],
    github:
      'https://github.com/anjaplemenitas/games_in_the_dungeon/blob/master/README.md',
    link: '',
  },
]

export default data
