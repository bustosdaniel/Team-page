import { Box, ImageList, ImageListItem, Typography } from "@mui/material"

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Product owner",
    name: "Bill Mahoney"
  },
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Tech Lead",
    name: "Saba Cabrera"
  },
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Developer",
    name: "Shae Le"
  },
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Art director",
    name: "Skylah Lu"
  },
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "UX Designer",
    name: "Griff Richards"
  },
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Developer",
    name: "Stan John"
  }
]

export default function Cards() {
  return (
    <Box>
      <ImageList
        variant="masonry"
        cols={2}
        gap={10}
        className="card-element-style"
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ position: "relative", marginBottom: "20px !important" }}
          >
            <Typography
              position="absolute"
              right="-25px"
              top="40px"
              sx={{ transform: "rotate(90deg)" }}
            >
              {item.title}
            </Typography>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                display: "inline-block",
                width: "80%"
              }}
            />
            <Typography>{item.name}</Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
