import React from "react";
import searchImg from "../assets/images/searchImg.png";
import listingsImg from "../assets/images/listingsImg.png";
import upArrow from "../assets/images/arrow-up-right.svg";
import blogsImg from "../assets/images/blogsImg.png";
import img01 from "../assets/images/img01.png";
import img02 from "../assets/images/img02.png";
import img03 from "../assets/images/img03.png";
import arrowUpRightBlack from "../assets/images/arrow-up-right-black.svg";
import profileImg01 from "../assets/images/profile-img01.png";
import profileImg02 from "../assets/images/profile-img02.png";
import profileImg03 from "../assets/images/profile-img03.png";
import CategorySelector from "../components/CategorySelector";

const Home = () => {
  return (
    <>
      {/* ================ Hero Section ================ */}
      <section className="hero__Section">
        <div className="hero_Img overlay mx-0 px-0">
          <div className="heading  md:w-[750px] mx-auto">
            <h1 className="font-[300] lg:text-[68px] md:text-[50px] text-[28px] text-[white]">
              One Platform For All Your Aesthetic Needs
            </h1>
            <p className="font-[300] md:text-[24px] text-[14px] text-[white] md:pt-10 pt-5">
              Discover the best services, trusted by our community
            </p>

            {/* ================ Search Bar ================ */}

            <div className="search__box flex justify-between lg:w-[850px] md:h-[68px] h-[50px] bg-[#E9E9E9] md:mt-16 mt-14">
              <div className="input__inner flex justify-between items-center md:h-[52px] md:gap-[10px]">
                <div className="input__wrapper flex items-center lg:w-[365px] md:h-[52px] bg-[white]">
                  <img src={searchImg} alt="" className="md:mr-0 mr-2" />
                  <input
                    placeholder="Search Keyword..."
                    type="text"
                    id="search"
                    className="input__cls md:ml-[1rem] focus:outline-none md:w-full w-full"
                  />
                </div>

                {/* ================ Categories Component ================ */}

                <CategorySelector />
                {/* ================ Categories Component ================ */}
              </div>

              <button className="btn md:w-[180px] md:h-[52px] bg-btnColor md:text-[24px] text-[15px] text-[white] md:leading-[27.65px] text-center">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ================ Hero Section End ================ */}

      {/* ================ Listings Section ================ */}
      <section className="lg:mx-[6rem] md:mx-[3rem] mx-[1rem]">
        <div className="container mx-auto">
          <div className="flex flex-col mx-auto md:pt-[6.4rem] pt-[3rem]">
            <h1 className="heading__listings lg:text-[40px] md:text-[30px] text-[26px] text-[#D86B56] text-center p-[8px] gap-[8px]">
              Most Popular Listings
            </h1>
            <p className="description lg:text-[24px] md:text-[18px] text-[#5C5354] m-auto mt-[1rem] lg:mb-[7rem] md:mb-[5rem] mb-[3.2rem]">
              Browse our top listings now and get the look you want
            </p>
          </div>

          <div className="grid__wrapper lg:mb-[1rem] mx-auto">
            <div className="grid__box grid lg:grid-cols-3 grid-cols-2 md:gap-[2rem] gap-[1rem] ">
              <div className="listings__card lg:mb-12 mb-4">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img lg:w-[312px] lg:h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto lg:py-[2.4rem] py-[2rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center ">
                    <h1 className="listing__heading text-[#D86B56] lg:text-left text-center lg:text-[24px] md:text-[20px] text-[18px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow md:w-[24px] w-[20px] md:h-[28px] h-[20px] "
                    />
                  </div>
                  <div className="reviews__text md:w-[19.5rem] w-[12rem] md:h-[3.1rem] h-[2.5rem] bg-[#F16060] ">
                    <h1 className="text-[white]">000 Reviews</h1>
                  </div>
                </div>
              </div>

              <div className="listings__card lg:mb-12 mb-4">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img lg:w-[312px] lg:h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto lg:py-[2.4rem] py-[2rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center ">
                    <h1 className="listing__heading text-[#D86B56] lg:text-left text-center lg:text-[24px] md:text-[20px] text-[18px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow md:w-[24px] w-[20px] md:h-[28px] h-[20px] "
                    />
                  </div>
                  <div className="reviews__text md:w-[19.5rem] w-[12rem] md:h-[3.1rem] h-[2.5rem] bg-[#F16060] ">
                    <h1 className="text-[white]">000 Reviews</h1>
                  </div>
                </div>
              </div>

              <div className="listings__card lg:mb-12 mb-4">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img lg:w-[312px] lg:h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto lg:py-[2.4rem] py-[2rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center ">
                    <h1 className="listing__heading text-[#D86B56] lg:text-left text-center lg:text-[24px] md:text-[20px] text-[18px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow md:w-[24px] w-[20px] md:h-[28px] h-[20px] "
                    />
                  </div>
                  <div className="reviews__text md:w-[19.5rem] w-[12rem] md:h-[3.1rem] h-[2.5rem] bg-[#F16060] ">
                    <h1 className="text-[white]">000 Reviews</h1>
                  </div>
                </div>
              </div>

              <div className="listings__card lg:mb-12 mb-4">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img lg:w-[312px] lg:h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto lg:py-[2.4rem] py-[2rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center ">
                    <h1 className="listing__heading text-[#D86B56] lg:text-left text-center lg:text-[24px] md:text-[20px] text-[18px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow md:w-[24px] w-[20px] md:h-[28px] h-[20px] "
                    />
                  </div>
                  <div className="reviews__text md:w-[19.5rem] w-[12rem] md:h-[3.1rem] h-[2.5rem] bg-[#F16060] ">
                    <h1 className="text-[white]">000 Reviews</h1>
                  </div>
                </div>
              </div>

              <div className="listings__card lg:mb-12 mb-4">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img lg:w-[312px] lg:h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto lg:py-[2.4rem] py-[2rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center ">
                    <h1 className="listing__heading text-[#D86B56] lg:text-left text-center lg:text-[24px] md:text-[20px] text-[18px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow md:w-[24px] w-[20px] md:h-[28px] h-[20px] "
                    />
                  </div>
                  <div className="reviews__text md:w-[19.5rem] w-[12rem] md:h-[3.1rem] h-[2.5rem] bg-[#F16060] ">
                    <h1 className="text-[white]">000 Reviews</h1>
                  </div>
                </div>
              </div>

              <div className="listings__card lg:mb-12 mb-4">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img lg:w-[312px] lg:h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto lg:py-[2.4rem] py-[2rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center ">
                    <h1 className="listing__heading text-[#D86B56] lg:text-left text-center lg:text-[24px] md:text-[20px] text-[18px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow md:w-[24px] w-[20px] md:h-[28px] h-[20px] "
                    />
                  </div>
                  <div className="reviews__text md:w-[19.5rem] w-[12rem] md:h-[3.1rem] h-[2.5rem] bg-[#F16060] ">
                    <h1 className="text-[white]">000 Reviews</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ Listings Section End ================ */}

      {/* ================ Blogs Section ================ */}
      <section>
        <div className="container mx-auto md:mt-[6.5rem] mt-[3.5rem]">
          <div className="img__wrapper lg:w-[1128px] lg:h-[462px] mx-auto ">
            <img
              src={blogsImg}
              alt=""
              className="lg:h-[462px] lg:w-[1128px] object-cover  "
            />
            <div className="blog__text">
              <h1>OUR BLOGS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tempor suscipit condimentum.
              </p>
            </div>
          </div>

          <div className="bottom__text lg:w-[715px] lg:mt-[4rem] md:mt-[3rem] mt-[2rem]">
            <div className="text__wrapper lg:text-left text-center flex flex-col lg:justify-start justify-center lg:items-start items-center md:gap-[1rem] lg:ml-[11%]">
              <h1 className="text-[#D86B56] lg:text-[48px] md:text-[30px] text-[24px] text-center ">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="md:text-[16px] text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tempor suscipit condimentum. Nulla et dolor molestie magna
                rhoncus iaculis vitae in nibh. Mauris eget elit ege.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================ Blogs Section END ================ */}

      {/* ================ Employees Section ================ */}
      <section>
        <div className="container mx-auto md:mt-[6.5rem] mt-[6rem] lg:mb-[12rem] md:mb-[8rem] mb-[5rem] ">
          <div className="grid__cards grid lg:grid-cols-3 grid-cols-2 md:mx-auto mx-3 lg:w-[1128px] lg:h-[580px] lg:gap-[20px] gap-[6px]">
            <div className="card md:w-[360px] md:h-[580px] lg:mb-0 mb-5 mx-auto">
              <img src={img01} alt="" className="Image__01 m-auto " />
              <div className="card__content flex flex-col mt-[10%] md:gap-[16px] gap-[8px]">
                <h1 className="card__label text-[#59A7D9] font-[600] text-[14px]">
                  Design
                </h1>
                <div className="heading__wrapper flex justify-between">
                  <h1 className="card__heading md:text-[22px] text-[18px]">
                    UX review presentations
                  </h1>
                  <img src={arrowUpRightBlack} alt="" />
                </div>
                <p className="card__txt md:text-[16px] text-[14px]">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </p>
              </div>
              <div className="profile__card flex lg:mt-[5rem] md:mt-[3rem] mt-[2rem] gap-[12px]">
                <img
                  src={profileImg01}
                  alt=""
                  className="profile__img md:w-[40px] w-[30px] md:h-[40px] h-[30px] bg-[#C7B9DA] rounded-full"
                />
                <div className="name_date__wrapper">
                  <h2 className="name text-[14px]">Olivia Rhye</h2>
                  <h2 className="date text-[#667085] text-[14px]">
                    20 Jan 2022
                  </h2>
                </div>
              </div>
            </div>

            <div className="card md:w-[360px] md:h-[580px] lg:mb-0 mb-5 mx-auto">
              <img src={img02} alt="" className="Image__01 m-auto " />
              <div className="card__content flex flex-col mt-[10%] gap-[16px]">
                <h1 className="card__label text-[#59A7D9] font-[600] text-[14px]">
                  Product
                </h1>
                <div className="heading__wrapper flex justify-between">
                  <h1 className="card__heading md:text-[22px] text-[18px]">
                    Migrating to Linear 101
                  </h1>
                  <img src={arrowUpRightBlack} alt="" />
                </div>
                <p className="card__txt md:text-[16px] text-[14px]">
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get started.
                </p>
              </div>
              <div className="profile__card flex lg:mt-[5rem] md:mt-[3rem] mt-[2rem] gap-[12px]">
                <img
                  src={profileImg02}
                  alt=""
                  className="profile__img md:w-[40px] w-[30px] md:h-[40px] h-[30px] bg-[#AA9C75] rounded-full"
                />
                <div className="name_date__wrapper">
                  <h2 className="name text-[14px]">Phoenix Baker</h2>
                  <h2 className="date text-[#667085] text-[14px]">
                    19 Jan 2022
                  </h2>
                </div>
              </div>
            </div>

            <div className="card md:w-[360px] md:h-[580px] lg:mb-0 mb-5 mx-auto">
              <img src={img03} alt="" className="Image__01 m-auto " />
              <div className="card__content flex flex-col mt-[10%] gap-[16px]">
                <h1 className="card__label text-[#59A7D9] font-[600] text-[14px]">
                  Software Engineering
                </h1>
                <div className="heading__wrapper flex justify-between">
                  <h1 className="card__heading md:text-[22px] text-[18px]">
                    Building your API Stack
                  </h1>
                  <img src={arrowUpRightBlack} alt="" />
                </div>
                <p className="card__txt md:text-[16px] text-[14px]">
                  The rise of RESTful APIs has been met by a rise in tools for
                  creating, testing, and managing them.
                </p>
              </div>
              <div className="profile__card flex lg:mt-[5rem] md:mt-[3rem] mt-[2rem] gap-[12px]">
                <img
                  src={profileImg03}
                  alt=""
                  className="profile__img md:w-[40px] w-[30px] md:h-[40px] h-[30px] bg-[#D4B5AD] rounded-full"
                />
                <div className="name_date__wrapper">
                  <h2 className="name text-[14px]">Lana Steiner</h2>
                  <h2 className="date text-[#667085] text-[14px]">
                    18 Jan 2022
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ Employees Section END ================ */}
    </>
  );
};

export default Home;
