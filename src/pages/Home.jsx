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
      <section className="hero__Section w-full">
        <div className="container w-full">
          <div className="hero_Img overlay w-full ">
            <div className="heading  sm:w-[750px] mx-auto">
              <h1 className="font-[300] lg:text-[68px] md:text-[50px] text-[28px] text-[white]">
                One Platform For All Your Aesthetic Needs
              </h1>
              <p className="font-[300] md:text-[24px] text-[14px] text-[white] md:pt-10 pt-5">
                Discover the best services, trusted by our community
              </p>

              {/* ================ Search Bar ================ */}

              <div className="search__box flex justify-between lg:w-[850px] md:h-[68px] h-[50px] bg-[#E9E9E9] md:mt-16 mt-14">
                <div className="input__inner flex justify-between items-center md:h-[52px] md:gap-[10px]">
                  <div className="input__wrapper flex items-center md:w-[365px] md:h-[52px] bg-[white]">
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
        </div>
      </section>
      {/* ================ Hero Section End ================ */}

      {/* ================ Listings Section ================ */}
      {/* <section>
        <div className="container mx-auto">
          <div className="flex flex-col m-auto pt-[100px]">
            <h1 className="heading__listings text-[40px] text-[#D86B56] text-center p-[8px] gap-[8px]">
              Most Popular Listings
            </h1>
            <p className="description text-[24px] text-[#5C5354] m-auto mt-[1rem] mb-[7rem]">
              Browse our top listings now and get the look you want
            </p>
          </div>

          <div className="grid__wrapper mb-[23px]">
            <div className="grid__box grid grid-cols-3 w-[1128px] h-[520px] gap-[23px] mx-auto">
              <div className="listings__card">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img w-[312px] h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto py-[2.4rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center text-center">
                    <h1 className="listing__heading text-[#D86B56] text-[24px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow w-[24px] h-[28px] "
                    />
                  </div>
                  <div className="reviews__text w-[312px] h-[50px] bg-[#F16060] ">
                    <h1 className="text-[white]">000 Reviews</h1>
                  </div>
                </div>
              </div>

              <div className="listings__card">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img w-[312px] h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto py-[2.4rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center text-center">
                    <h1 className="listing__heading text-[#D86B56] text-[24px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow w-[24px] h-[28px] "
                    />
                  </div>
                  <div className="reviews__text w-[312px] h-[50px] bg-[#F16060] ">
                    <h1 className="  text-[white] my-auto">000 Reviews</h1>
                  </div>
                </div>
              </div>

              <div className="listings__card">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img w-[312px] h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto py-[2.4rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center text-center">
                    <h1 className="listing__heading text-[#D86B56] text-[24px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow w-[24px] h-[28px] "
                    />
                  </div>
                  <div className="reviews__text w-[312px] h-[50px] bg-[#F16060] ">
                    <h1 className="  text-[white] my-auto">000 Reviews</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid__wrapper gap-[23px]">
            <div className="grid__box grid grid-cols-3 w-[1128px] h-[520px] gap-[23px] mx-auto">
              <div className="listings__card">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img w-[312px] h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto py-[2.4rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center text-center">
                    <h1 className="listing__heading text-[#D86B56] text-[24px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow w-[24px] h-[28px] "
                    />
                  </div>
                  <div className="reviews__text w-[312px] h-[50px] bg-[#F16060] ">
                    <h1 className="  text-[white] my-auto">000 Reviews</h1>
                  </div>
                </div>
              </div>

              <div className="listings__card">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img w-[312px] h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto py-[2.4rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center text-center">
                    <h1 className="listing__heading text-[#D86B56] text-[24px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow w-[24px] h-[28px] "
                    />
                  </div>
                  <div className="reviews__text w-[312px] h-[50px] bg-[#F16060] ">
                    <h1 className="  text-[white] my-auto">000 Reviews</h1>
                  </div>
                </div>
              </div>

              <div className="listings__card">
                <img
                  src={listingsImg}
                  alt=""
                  className="listing__img w-[312px] h-[240px] rounded-[12px]"
                />

                <div className="content flex flex-col justify-between items-center text-center m-auto py-[2.4rem] gap-[12px]">
                  <div className="heading__wrapper flex w-full justify-between p-0 m-0 items-center text-center">
                    <h1 className="listing__heading text-[#D86B56] text-[24px] ">
                      Salon/Professional
                    </h1>
                    <img
                      src={upArrow}
                      alt=""
                      className="arrow w-[24px] h-[28px] "
                    />
                  </div>
                  <div className="reviews__text w-[312px] h-[50px] bg-[#F16060] ">
                    <h1 className="  text-[white] my-auto">000 Reviews</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ================ Listings Section End ================ */}

      {/* ================ Blogs Section ================ */}
      {/* <section>
        <div className="container mx-auto mt-[6.5rem]">
          <div className="img__wrapper w-[1128px] h-[462px] mx-auto ">
            <img
              src={blogsImg}
              alt=""
              className="h-[462px] w-[1128px] object-cover  "
            />
            <div className="blog__text">
              <h1>OUR BLOGS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tempor suscipit condimentum.
              </p>
            </div>
          </div>

          <div className="bottom__text w-[715px] mt-[4rem]">
            <div className="text__wrapper text-left flex flex-col justify-start items-start gap-[1rem] ml-[11%]">
              <h1 className="text-[#D86B56] text-[48px] ">
                Lorem ipsum dolor sit amet.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tempor suscipit condimentum. Nulla et dolor molestie magna
                rhoncus iaculis vitae in nibh. Mauris eget elit ege.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* ================ Blogs Section END ================ */}

      {/* ================ Employees Section ================ */}
      {/* <section>
        <div className="container mx-auto mt-[6.5rem] mb-[12rem] ">
          <div className="grid__cards grid grid-cols-3 mx-auto w-[1128px] h-[580px] gap-[20px]">
            <div className="card w-[360px] h-[580px] mx-auto">
              <img src={img01} alt="" className="Image__01 m-auto rounded-xl" />
              <div className="card__content flex flex-col mt-[10%] gap-[16px]">
                <h1 className="card__label text-[#59A7D9] font-[600] text-[14px]">
                  Design
                </h1>
                <div className="heading__wrapper flex justify-between">
                  <h1 className="card__heading text-[22px]">
                    UX review presentations
                  </h1>
                  <img src={arrowUpRightBlack} alt="" />
                </div>
                <p className="card__txt">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers?
                </p>
              </div>
              <div className="profile__card flex mt-[5rem] gap-[12px]">
                <img
                  src={profileImg01}
                  alt=""
                  className="profile__img w-[40px] h-[40px] bg-[#C7B9DA] rounded-full"
                />
                <div className="name_date__wrapper">
                  <h2 className="name text-[14px]">Olivia Rhye</h2>
                  <h2 className="date text-[#667085] text-[14px]">
                    20 Jan 2022
                  </h2>
                </div>
              </div>
            </div>

            <div className="card w-[360px] h-[580px] mx-auto">
              <img src={img02} alt="" className="Image__01 m-auto rounded-xl" />
              <div className="card__content flex flex-col mt-[10%] gap-[16px]">
                <h1 className="card__label text-[#59A7D9] font-[600] text-[14px]">
                  Product
                </h1>
                <div className="heading__wrapper flex justify-between">
                  <h1 className="card__heading text-[22px]">
                    Migrating to Linear 101
                  </h1>
                  <img src={arrowUpRightBlack} alt="" />
                </div>
                <p className="card__txt">
                  Linear helps streamline software projects, sprints, tasks, and
                  bug tracking. Here’s how to get started.
                </p>
              </div>
              <div className="profile__card flex mt-[5rem] gap-[12px]">
                <img
                  src={profileImg02}
                  alt=""
                  className="profile__img w-[40px] h-[40px] bg-[#AA9C75] rounded-full"
                />
                <div className="name_date__wrapper">
                  <h2 className="name text-[14px]">Phoenix Baker</h2>
                  <h2 className="date text-[#667085] text-[14px]">
                    19 Jan 2022
                  </h2>
                </div>
              </div>
            </div>

            <div className="card w-[360px] h-[580px] mx-auto">
              <img src={img03} alt="" className="Image__01 m-auto rounded-xl" />
              <div className="card__content flex flex-col mt-[10%] gap-[16px]">
                <h1 className="card__label text-[#59A7D9] font-[600] text-[14px]">
                  Software Engineering
                </h1>
                <div className="heading__wrapper flex justify-between">
                  <h1 className="card__heading text-[22px]">
                    Building your API Stack
                  </h1>
                  <img src={arrowUpRightBlack} alt="" />
                </div>
                <p className="card__txt">
                  The rise of RESTful APIs has been met by a rise in tools for
                  creating, testing, and managing them.
                </p>
              </div>
              <div className="profile__card flex mt-[5rem] gap-[12px]">
                <img
                  src={profileImg03}
                  alt=""
                  className="profile__img w-[40px] h-[40px] bg-[#D4B5AD] rounded-full"
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
      </section> */}
      {/* ================ Employees Section END ================ */}
    </>
  );
};

export default Home;
