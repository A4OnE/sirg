import React from "react";
import BodCard from "../../components/Cards/BodCard";
import PageTemplate from "../../components/Templates/PageTemplate";

function BOD() {
  const data = [
    {
      img: "https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=",
      name: "Sunder Darji",
      title: "Manager",
    },

    {
      img: "https://media.istockphoto.com/photos/smiling-mixed-race-mature-man-on-grey-background-picture-id1319763895?b=1&k=20&m=1319763895&s=170667a&w=0&h=jhqKyg62cQVZ-NjDQjpcenCdHDrprkN4caRjk4K76E8=",
      name: "Ashish Khanal",
      title: "Full-Stack Developer",
    },

    {
      img: "https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot2003/vadymvdrobot200300051/142744663-image-of-a-young-strong-happy-cheery-sports-man-posing-outdoors-in-nature-green-park-looking-camera-.jpg?ver=6",
      name: "shyal khanal",
      title: "Project Manager",
    },

    {
      img: "https://media.istockphoto.com/photos/beautiful-smiling-african-ethnicity-businesswoman-picture-id1300304411?b=1&k=20&m=1300304411&s=170667a&w=0&h=7K4_MgZl5jfWL_JD5tF4ZiMVuSqS3MI5nA4TFeTeGa4=",
      name: "Sakuntala darji",
      title: "Finance Manager",
    },

    {
      img: "https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-standing-over-picture-id1212702108?k=20&m=1212702108&s=612x612&w=0&h=ZI4gKJi2d1dfi74yTljf4YhulA1nfhD3dcUFGH-NUkY=",
      name: "Ashok Hamal",
      title: "investor",
    },

    {
      img: "https://spng.pngfind.com/pngs/s/32-322370_man-pointing-finger-png-free-download-person-pointing.png",
      name: "Sunder Darji",
      title: "Manager",
    },

    {
      img: "https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=",
      name: "Sunder Darji",
      title: "Manager",
    },
  ];
  return (
    <PageTemplate>
      <div className="container mx-auto px-4  mt-8 lg:px-8">
        <div>
          <h1 className="text-primary text-center gap-8 my-14 text-5xl tracking-wider font-bold">
            Board of Directors
          </h1>
        </div>
        {/* Header bod section */}
        <div className="text-center my-10">
          <img
            src={data[0].img}
            className="rounded-md shadow-md h-96 mx-auto"
          />
          <p className="text-2xl font-bold mt-5 ">{data[0].name}</p>
          <p className="text-xl font-medium mt-3 ">{data[0].title}</p>
        </div>

        {/* Bod body section */}
        <div className="container mx-auto px-4  my-10 lg:px-8">
          <div className="grid lg:grid-cols-3  gap-6">
            {data.map((item) => (
              <BodCard img={item.img} name={item.name} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default BOD;
