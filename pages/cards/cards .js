import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import ecomlogo1 from '../../public/cardimage1.png'
import ecomlogo2 from '../../public/cardimage2.png'
import ecomlogo3 from '../../public/cardimage3.png'
import ecomlogo4 from '../../public/cardimage4.png'
import ecomlogo5 from '../../public/cardimage5.png'
import ecomlogo6 from '../../public/cardimage6.png'

import styles from '../../styles/card.module.css';

function cards() {
    return (
        <div>
     <div style={{ display: 'flex' , marginTop:'80px'}}>
                <div style={{marginLeft:'110px'}}>
                    <div>
                        <Card sx={{ maxWidth: '550px', height: '300px', backgroundColor: '#733838', borderRadius: '15px' }}>
            
                            <Typography variant="h6" noWrap component="div">

                                <Image src={ecomlogo1} alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px',marginLeft:'20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                Dev Ops
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES. PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div >
                    <div style={{ marginTop:'70px'}}>
                    <Card sx={{ maxWidth: '550px', height: '300px', backgroundColor: '#733838', borderRadius: '15px' }}>
             
                        <Typography variant="h6" noWrap component="div">

                            <Image src={ecomlogo2} alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px',marginLeft:'20px'}} />
                        </Typography>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                SEO
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                            FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES, PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                            </Typography>
                        </CardContent>
                    </Card>
                    </div>
                    <div style={{ marginTop:'70px'}}>
                        <Card sx={{ maxWidth: '550px', height: '300px', backgroundColor: '#733838', borderRadius: '15px' }}>
                            {/* <CardMedia
        sx={{ height: 100 }}
        image="/reptile.jpg"
        title="info"
      /> */}
                            <Typography variant="h6" noWrap component="div">

                                <Image src={ecomlogo3} alt="logo" width="95" height="95" style={{ borderRadius: '50px',  marginTop: '20px',marginLeft:'20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                Dev Ops
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES, PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div style={{marginLeft:'145px'}}> 
                    <div>
                        <Card sx={{ maxWidth: '550px', height: '300px', backgroundColor: '#733838', borderRadius: '15px' }}>
                            {/* <CardMedia
        sx={{ height: 100 }}
        image="/reptile.jpg"
        title="info"
      /> */}
                            <Typography variant="h6" noWrap component="div">

                                <Image src={ecomlogo4} alt="logo" width="95" height="95" style={{ borderRadius: '50px',  marginTop: '20px',marginLeft:'20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                Web/Mobile Application
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES, PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div style={{ marginTop:'70px'}}> 
                        <Card sx={{ maxWidth: '550px', height: '300px', backgroundColor: '#733838', borderRadius: '15px' }}>
                            {/* <CardMedia
        sx={{ height: 100 }}
        image="/reptile.jpg"
        title="info"
      /> */}
                            <Typography variant="h6" noWrap component="div">

                                <Image src={ecomlogo5} alt="logo" width="95" height="95" style={{ borderRadius: '50px', marginTop: '20px',marginLeft:'20px'}} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                Digital Marketing
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES, PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div style={{ marginTop:'70px'}}>
                        <Card sx={{ maxWidth: '550px', height: '300px', backgroundColor: '#733838', borderRadius: '15px' }}>
                            {/* <CardMedia
        sx={{ height: 100 }}
        image="/reptile.jpg"
        title="info"
      /> */}
                            <Typography variant="h6" noWrap component="div">

                                <Image src={ecomlogo6} alt="logo" width="95" height="95" style={{ borderRadius: '50px',  marginTop: '20px',marginLeft:'20px' }} />
                            </Typography>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{ color: 'white' }}>
                                Data Science
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                FOR STARTUPS AND GROWING BUSINESSES, WEB AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES, PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default cards 