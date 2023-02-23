import {
  Box, Typography,
  Accordion, AccordionSummary, AccordionActions, AccordionDetails,
} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled'
import polygon from '../Sponsors/assets/Polygon.png';
import Back from './ast/dp.png';
import ik from '../Sponsors/assets/ikarus.png'
import styles from './sptr.module.css'
export const SponsorTracks = () => {
  
  const headFont = "'Titillium Web', sans-serif";
  const font = "'Lexend Exa', sans-serif";

  const ParentBox = styled(Box)({
    width: "100vw",
    height: "fit-content",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    backgroundImage: `url(${Back})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "fixed"
  });

  const Title = styled(Box)({
    width: "100vw",
    height: "15vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  })

  const SponsBox = styled(Box)({
    width: "100vw",
    height: "fit-content",
    paddingBottom: "10%",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: "20px",
    alignItems: "center",
    marginTop: "3rem",
  })

  const SponsTrack = styled(Box)({
    width: "90vw",
    height: "25vh",
    backgroundColor: "#000000aa",
    backdropFilter: "blur(10px)",
    margin: "2rem",
    padding: "1rem",
    borderRadius: "10px",
    transition: "0.6s height ease-in",
 })

  const CompanyText = styled(Typography)({
    fontFamily: headFont,
    color: "white",
  })

  return(
    <ParentBox>
      <Title>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontFamily: headFont,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "3rem"
          }}
        >
          SPONSOR TRACKS
        </Typography>
      </Title>
      <SponsBox>
        <Accordion
          sx={{
            backgroundColor: "#fbfbfb44",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            width: "90%",
            marginBottom: "10px",
            border: "none"
          }}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <img
              className={styles.imgik}
              src={ik}
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color="white"
              variant="h6"
              style={{
                fontFamily: headFont
              }}
            >
              <strong>About Ikarus3D: </strong>  It is a reliable partner for some of the biggest names in the AR, VR, XR, and WebAR industry and home to dozens of 3D artists, driven to use their art to bring AR & VR ready 3D models, Photorealistic 3D models, models from Photogrammetry as well as 3D scan cleanups, and 3D file optimization to the users.
            </Typography>
            <br />
            <ul
              style={{
                paddingLeft: "2rem"
              }}
            >
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  <strong>ML Model for Plagiarism in 3D: </strong>
                  <p>
                    As we progress to a world that is more digital and immersive we are building 3D models at an increasing pace. This can lead to plagiarism in the 3D model design community. The plagiarizer makes minor tweaks in the model, and publishes it as their own on marketplaces;or uses social media to gain traction for their profile from the copied model. The first step to stop this IP theft is to identify that it has actually happened. As a business, you have decided to tackle this issue which plagues all the 3D artists right now and build an ML model that will take your 3D model and a plagiarised 3D model for comparison. It should return the level of similarity between the 2 models. If the similarity percentage is greater than 70% it should flag the plagiarised 3D model.
                  </p>
                  <em>The resources that you can use to train the ML model are -</em><br/>
                  <ul
                    style={{
                      marginLeft: "1rem"
                    }}
                  >
                    <li><a href="https://shapenet.org/" target="_blank" style={{color: "#00a0ff"}}>Shapenet</a></li>
                    <li><a href="https://www.kaggle.com/datasets/ryanrudes/shapenet" target="_blank" style={{color: "#00a0ff"}}>Shapenet Dataset</a></li>
                    <li><a href="https://shapenet.org/" target="_blank" style={{color: "#00a0ff"}}>Shapenet Core</a></li>
                    <li><a href="https://paperswithcode.com/dataset/shapenetcore" target="_blank" style={{color: "#00a0ff"}}>Shapenet Core Dataset</a></li>
                    <li><a href="https://tianchi.aliyun.com/specials/promotion/alibaba-3d-future" target="_blank" style={{color: "#00a0ff"}}>3D Future</a></li>
                    <li><a href="https://tianchi.aliyun.com/dataset/98063" target="_blank" style={{color: "#00a0ff"}}>3D Future Dataset</a></li>
                  </ul>
                  <strong>Create a business proposition for this and build the ML model for identifying similarities between 3D models.</strong>
                  <br />
                </Typography>
              </li>
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  <strong>Online 3D Slicer: </strong>
                  <p>
                    3D Printing is a growing field of interest for many professionals such as artists, architects, construction engineers, aerospace engineers, mechanical engineers, and hobbyists such as cosplayers, toolmakers, toymakers, etc. 3D printing as with any other domain requires deep knowledge to build models that are perfect and meet high-quality standards. For 3D printing, you require high-quality 3D models which are generally exported in .stl format. The .stl files are then converted into .gcode format using a slicer. The .gcode files are what a 3D printer can print. There are a few barriers to the adoption of 3D printing. The primary one is the learning curve that a beginner faces when printing custom assets. Learning how to convert an STL to usable GCode requires knowledge of your 3D printer, knowledge of supports to be printed for 3D printing the asset, filament used, and a host of environmental challenges. We feel this can be tackled to a large extent by having a slicer available on the web which allows for the addition of features like guided walkthroughs, shareable workspaces, and active collaboration within teams and people, and smarter solutions with actively updated environments. Create an online slicer with all a slicer's basic and intermediate functionalities. You should read about the functions of a slicer, how it works, its input parameters, its visual display, printer settings, etc.

                  </p>
                  <em>The resources that you can use are -</em><br/>
                  <ul
                    style={{
                      marginLeft: "1rem"
                    }}
                  >
                    <li><a href="https://github.com/slic3r/Slic3r" target="_blank" style={{color: "#00a0ff"}}>Slic3r </a></li>
                    <li><a href="https://github.com/prusa3d/PrusaSlicer" target="_blank" style={{color: "#00a0ff"}}>PrusaSlicer</a></li>
                    <li><a href="https://github.com/supermerill/SuperSlicer" target="_blank" style={{color: "#00a0ff"}}>SuperSlicer</a></li>
                    <li><a href="https://github.com/Ultimaker/Cura" target="_blank" style={{color: "#00a0ff"}}>Cura</a></li>
                  </ul>
                </Typography>
              </li>

            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#fbfbfb44",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            width: "90%",
            marginBottom: "10px",
            border: "none",
            fontFamily: headFont,
          }}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img
              className={styles.img}
              src={polygon}
            />
          </AccordionSummary>
          <AccordionDetails
            sx={{fontFamily: headFont}}
          >
            <Typography
              color="white"
              variant="h6"
              style={{
                fontFamily: headFont
              }}
            >
              <strong>About Polygon: </strong>Polygon is a protocols and a framework for building and connecting Etherium-compatable blockchain networks.
            </Typography>
            <br />
            <ul
              style={{
                paddingLeft: "2rem"
              }}
            >
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  Best Hack built on Etherium + Polygon:  Read about the bounty details and find code templates for Polygon on: <a target="_blank" href="https://nsb.dev/polygon-bounty" style={{color: "#00a0ff"}}>https://nsb.dev/polygon-bounty</a> (250 USD)
                </Typography>
              </li>
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  Best hack built on Etherium:  Read about the bounty details and find code templates for Polygon on: <a target="_blank" href="https://nsb.dev/polygon-bounty" style={{color: "#00a0ff"}}>https://nsb.dev/polygon-bounty</a>&nbsp;(150 USD)
                </Typography>
              </li>

            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: "#fbfbfb44",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            width: "90%",
            marginBottom: "10px",
            border: "none",
            fontFamily: headFont,
          }}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img
              className={styles.img}
              src="https://tezos.com/meta/Tezos_Meta.jpg"
            />
          </AccordionSummary>
          <AccordionDetails
            sx={{fontFamily: headFont}}
          >
            <Typography
              color="white"
              variant="h6"
              style={{
                fontFamily: headFont
              }}
            >
              <strong>About Tezos: </strong>Tezos is an open-source blockchain that can execute peer-to-peer transactions and serve as a platform for deploying smart contracts.
            </Typography>
            <br />
            <ul
              style={{
                paddingLeft: "2rem"
              }}
            >
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  Build a platform for the users to design their own avatar (e.g. <a target="_blank" href="https://avatarmaker.com/" style={{color: "#00a0ff"}}>https://avatarmaker.com/</a>) and mint them as an NFT on Tezos for a price based on the amount of personalization they’ve added to their avatar such as makeup, hair, facial hair, and accessories, etc.  A generative NFT collection in short.
                </Typography>
              </li>
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  Build an on-chain project showcasing platform such as <a target="_blank" href="https://producthunt.com" style={{color: "#00a0ff"}}>https://producthunt.com</a>, where builders can mint their project as an NFT, and users/audience can show their support to them by upvoting/adding funds to them in form of XTZ for which they can mint a gratitude NFT sort of. (Optional) Implement a leaderboard for the projects too which will get updated by the number of upvotes a project has, i.e. project with the most upvotes/donations will lead the board.
                </Typography>
              </li>
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  Build a platform to fractionalize a user’s existing NFTs or mint new ones from scratch thus enabling collective ownership of an NFT rather than each person buying their own version. Also add a governance mechanism for the holders of fractions to vote on any related propositions to the NFT such as when to sell, whom to sell etc. Price of each fraction can be proportional to the current floor price of the original edition. Think of <a target="_blank" href="https://fractional.art" style={{color: "#00a0ff"}}>fractional.art</a> but on Tezos.
                </Typography>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#fbfbfb44",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            width: "90%",
            marginBottom: "10px",
            border: "none"
          }}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <img
              className={styles.img}
              src="https://winklevosscapital.com/wp-content/uploads/2020/10/filecoin-logo-color.png"
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color="white"
              variant="h6"
              style={{
                fontFamily: headFont
              }}
            >
              <strong>About Filecoin: </strong>Filecoin is an open-source, public cryptocurrency and digital payment system intended to be a blockchain-based cooperative digital storage and data retrieval method
            </Typography>
            <br />
            <ul
              style={{
                paddingLeft: "2rem"
              }}
            >
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  Best use of Filecoin and/or IPFS: Read about the bounty details and find code templates for Filecoin here: <a target="_blank" href="https://nsb.dev/filecoin-bounty" style={{color: "#00a0ff"}}>https://nsb.dev/filecoin-bounty</a>
                </Typography>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#fbfbfb44",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            width: "90%",
            marginBottom: "10px",
            border: "none"
          }}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <img
              className={styles.img}
              src="https://cryptosrus.com/wp-content/uploads/2021/08/Solana-SOL-1536x948.png"
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              color="white"
              variant="h6"
              style={{
                fontFamily: headFont
              }}
            >
              <strong>About Solana: </strong>Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.
            </Typography>
            <br />
            <ul
              style={{
                paddingLeft: "2rem"
              }}
            >
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  <strong>Young Gun:</strong> For the best project beginners just starting out on Solana - <em>100 USD</em>
                </Typography>
              </li>
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  <strong>Master Glasseater:</strong> For the best advanced project that is almost ready for full-time development - <em>500 USD</em> 
                </Typography>
              </li>
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  <strong>Rising Teknoking:</strong> For the best project that goes into depth, demonstrating higher-order code - <em>250 USD</em>
 
                </Typography>
              </li>


            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#fbfbfb44",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            width: "90%",
            marginBottom: "10px",
            border: "none",
            fontFamily: headFont,
          }}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img
              className={styles.img}
              src="https://res.cloudinary.com/ds7xs3pq1/image/upload/v1676998765/shardeum_etfap8.jpg"
            />
          </AccordionSummary>
          <AccordionDetails
            sx={{fontFamily: headFont}}
          >
            <Typography
              color="white"
              variant="h6"
              style={{
                fontFamily: headFont
              }}
            >
              <strong>About Sharedum: </strong> Shardeum is an EVM-based, linearly scalable smart contract platform that provides low gas fees forever while maintaining true decentralization and solid security through dynamic state sharding.
            </Typography>
            <br />
            <ul
              style={{
                paddingLeft: "2rem"
              }}
            >
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  Scale your Web3 application by deploying on Shardeum.
                  <strong>Eligibility Criteria:</strong>
                  <ul
                    style={{
                      marginLeft: "1.5rem"
                    }}
                  >
                    <li>
                      The smart contracts of the application needs to be deployed on any of Shardeum's testnet (preferably Shardeum Sphinx).
                    </li>
                    <li>
                      This is an open track so any application built on Shardeum using NFT, DeFi, Gaming, or Infra will be eligible.
                    </li>
                  </ul>
                  <strong>Important Links and Documentation:</strong>
                  <ul>
                    <li>Website: <a target="_blank" href="https://shardeum.org/" style={{color: "#00a0ff"}}>https://shardeum.org/</a></li>
                    <li>Twitter: <a target="_blank" href="https://discord.gg/shardeum" style={{color: "#00a0ff"}}>https://twitter.com/shardeum</a></li>
                    <li>Developer Documentation:<a target="_blank" href="https://docs.shardeum.org/" style={{color: "#00a0ff"}}> https://docs.shardeum.org/</a></li>
                    <li>Shardeum Discord: <a target="_blank" href="https://discord.gg/shardeum" style={{color: "#00a0ff"}}>https://discord.gg/shardeum</a></li>
                  </ul>
                </Typography>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#fbfbfb44",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            width: "90%",
            marginBottom: "10px",
            border: "none",
            fontFamily: headFont,
          }}
          defaultExpanded={true}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img
              className={styles.imgvb}
              src="https://res.cloudinary.com/damjdcgak/image/upload/v1676974180/Makeathon%205%20website/Sponsors%20Page/Associate/verbwire_hwfpfd.png" 
            />
          </AccordionSummary>
          <AccordionDetails
            sx={{fontFamily: headFont}}
          >
            <Typography
              color="white"
              variant="h6"
              style={{
                fontFamily: headFont
              }}
            >
              <strong>About Verbwire: </strong> Blockchain Service aiming to provide a single universal API for Web3
            </Typography>
            <br />
            <ul
              style={{
                paddingLeft: "2rem"
              }}
            >
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  Most Innovative Use Of Verbwire API 
                </Typography>
              </li>
              <li
                style={{
                  color:"white"
                }}
              >
                <Typography
                  color="white"
                  variant="h6"
                  style={{
                    fontFamily: headFont
                  }}
                >
                  Creative Use Of Verbwire API
                </Typography>
              </li>
            </ul>
            <Typography
              color="white"
              variant="h6"
              style={{
                fontFamily: headFont,
              }}
            >
              <strong>Resources:</strong><br/>
              <ul
                style={{
                  marginLeft: "3rem"
                }}
              >
                <li style={{color: "white"}}><a target="_blank" href="https://docs.verbwire.com/docs/verbwire-quickstart-guide" style={{color: "#00a0ff"}}>Quick Start guide</a></li>
                <li style={{color: "white"}}><a target="_blank" href="https://docs.verbwire.com/reference/getting-started-with-your-api" style={{color: "#00a0ff"}}>API documentation</a></li>
                <li style={{color: "white"}}><a target="_blank" href="https://github.com/verbwire" style={{color: "#00a0ff"}}>Sample Tutorial Projects</a></li>
                <li style={{color: "white"}}><a target="_blank" href="https://www.verbwire.com/community" style={{color: "#00a0ff"}}>Community Projects</a></li>
                <li style={{color: "white"}}><a target="_blank" href="https://docs.verbwire.com/recipes" style={{color: "#00a0ff"}}>Sample Recipes </a></li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </SponsBox>
    </ParentBox>
  )
}
