import { Grid, Card, CardContent, Typography, Button, CardActions, Box, Avatar, CircularProgress, Rating, IconButton } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CanvasJSReact from '@canvasjs/react-charts';
import Chip from '@mui/material/Chip';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarsIcon from '@mui/icons-material/Stars';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  title: {
    text: "Activity"
  },
  data: [
    {
      type: "column",
      dataPoints: [
        { label: "5", y: 10 },
        { label: "9", y: 15 },
        { label: "44", y: 25 },
        { label: "3", y: 30 },
        { label: "6", y: 28 },
        { label: "5", y: 10 },
        { label: "9", y: 15 },
        { label: "14", y: 25 },
        { label: "3", y: 30 },
        { label: "6", y: 28 },
        { label: "5", y: 10 },
        { label: "9", y: 15 },
        { label: "44", y: 25 },
        { label: "3", y: 30 },
        { label: "6", y: 28 }
      ]
    }
  ]
}

const cards = [
  { label: 'Total Orders', count: 1200, icon: '📦', increment: 3 },
  { label: 'Total Delivered', count: 1150, icon: '🚚', increment: 2 },
  { label: 'Total Cancelled', count: 50, icon: '❌', increment: -1 },
  { label: 'Total Revenue', count: '$15,000', icon: '💵', increment: 4 },
  { label: 'Net Profit', count: '$5,000', icon: '📈', increment: 70, progress: 70 },
];

const rows = [
  { name: 'Jane Cooper', orderno: 154597, amount: "$124.00", status: 'Delivered', photo: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?t=st=1722528531~exp=1722532131~hmac=43df56dafd457eafa87db9103e37ce2378828420d4c8156d54ed6dcc694ca646&w=740' },
  { name: 'Kristin Watson', orderno: 254537, amount: "$24.00", status: 'Cancelled', photo: 'https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?semt=ais_hybrid' },
  { name: 'Cody Fisher', orderno: 245456, amount: "$50.00", status: 'Delivered', photo: 'https://img.freepik.com/premium-photo/joyful-3d-male-cartoon-character-with-short-dark-hair-neatly-trimmed-beard-pink-tshirt_1092425-1483.jpg?semt=ais_hybridhttps://via.placeholder.com/40' },
  { name: 'Helena', orderno: 356605, amount: "$14.00", status: 'Delivered', photo: 'https://img.freepik.com/premium-photo/cartoon-character-girl-with-yellow-sweater_972478-16530.jpg?ga=GA1.1.2115304498.1722522348' },

  { name: 'Warren', orderno: 334345, amount: "$100.00", status: 'Cancelled', photo: 'https://img.freepik.com/free-photo/3d-illustration-businessman-with-glasses-city-street-background_1142-51028.jpg?ga=GA1.1.2115304498.1722522348&semt=ais_hybrid' },
  { name: 'Warren', orderno: 334345, amount: "$100.00", status: 'Cancelled', photo: 'https://img.freepik.com/free-photo/3d-illustration-businessman-with-glasses-city-street-background_1142-51028.jpg?ga=GA1.1.2115304498.1722522348&semt=ais_hybrid' },
];

const feedbacks = [
  { name: 'John Doe', photo: 'photo_url_1', feedback: 'The food was excelent ans so was the price.I had a burger over greens which was also very good.They were very delicious', rating: 3 },
  { name: 'Devon Lane', photo: 'photo_url_2', feedback: 'Very satisfied with the quality.We enjoyed the Eggs.', rating: 5 },
  { name: 'Devon Lane', photo: 'photo_url_2', feedback: 'Very satisfied with the quality.We enjoyed the Eggs.', rating: 5 },

];

function CardComponent() {
  return (
    <>
    <Grid container spacing={2} justifyContent="center" sx={{backgroundColor:"#233052"}}>
  {cards.map((card, index) => (
    <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
      <Card sx={{ textAlign: 'center', backgroundColor: "pink",height:"100%" }}>
        <CardContent>
          <Box sx={{ fontSize: '2rem', mb: 2 }}>{card.icon}</Box>
          <Typography variant="h6" gutterBottom>
            {card.label}
          </Typography>
          <Typography variant="body1">{card.count}</Typography>
          {card.label === 'Net Profit' && (
            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgress variant="determinate" value={card.progress} size={50} />
              <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                {card.progress}%
              </Typography>
            </Box>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
            {card.increment > 0 ? (
              <ArrowUpwardIcon color="success" sx={{ fontSize: '1rem' }} />
            ) : (
              <ArrowDownwardIcon color="error" sx={{ fontSize: '1rem' }} />
            )}
            <Typography
              variant="body2"
              color={card.increment > 0 ? 'success.main' : 'error.main'}
              sx={{ ml: 0.5 }}
            >
              {Math.abs(card.increment)}%
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
<br/>


      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} p={2} sx={{backgroundColor:'#524023'}} >
        <Box flex={8} p={2}>
          <CanvasJSChart options={options}  />
        </Box>
        <Box flex={4} p={2} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #ddd',
          borderRadius: '4px',
          backgroundColor: 'gray',
        }}>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="100%" mb={2}>
            <Box display="flex" alignItems="center">
              <StarsIcon sx={{ marginRight: 1 }} />
              <Typography variant="h6">Goals</Typography>
            </Box>
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="100%" mb={2}>
            <Box display="flex" alignItems="center">
              <RestaurantMenuIcon sx={{ marginRight: 1 }} />
              <Typography variant="h6">Popular Dishes</Typography>
            </Box>
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="100%">
            <Box display="flex" alignItems="center">
              <MenuBookIcon sx={{ marginRight: 1 }} />
              <Typography variant="h6">Menus</Typography>
            </Box>
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
<br/>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} p={2} sx={{ backgroundColor: '#234e52' }}>
        <Box flex={1} p={2}>
          <Typography variant="h6" gutterBottom sx={{color:"white"}}>
            Recent Orders
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Photo</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Order No.</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Avatar alt={row.name} src={row.photo} />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.orderno}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>
                      <Chip label={row.status} color={row.status === 'Delivered' ? 'success' : 'error'} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box flex={1} p={2}>
          <Typography variant="h6" gutterBottom sx={{color:"white"}}>
            Feedback
          </Typography>
          {feedbacks.map((feedback, index) => (
            <Box key={index} mb={2} p={2} sx={{ backgroundColor: '#fff', borderRadius: '4px', boxShadow: 1 }}>
              <Box display="flex" alignItems="center" mb={1}>
                <Avatar alt={feedback.name} src={feedback.photo} sx={{ mr: 2 }} />
                <Typography variant="body1" fontWeight="bold">{feedback.name}</Typography>
              </Box>
              <Typography variant="body2" paragraph>{feedback.feedback}</Typography>
              <Rating value={feedback.rating} readOnly />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CardComponent;
