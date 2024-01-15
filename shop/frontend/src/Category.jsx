import React from "react";

function Category() {
    return <diV className="category-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <a href="/">
                        <div class="category">
                            <div class="category-details">
                                <h1 class="category-heading">
                                    Handloom
                                </h1>
                                <p class="category-content">
                                    Handloom is a traditional method of weaving textiles by hand, preserving age-old craftsmanship and cultural heritage.</p>
                            </div>
                            <img class="category-img category-img1"
                                src="https://i.pinimg.com/564x/23/c2/b7/23c2b719d7ef7f37b5f7c82186fccaed.jpg" alt=".."></img>
                        </div>
                    </a>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <a href="/">
                        <div class="category">
                            <img class="category-img category-img1"
                                src="https://i.pinimg.com/564x/e7/a5/74/e7a57486b37a128490c302dd1602dde5.jpg" alt=".."></img>
                            <div class="category-details">
                                <h1 class="category-heading">
                                    Power Loom
                                </h1>
                                <p class="category-content">
                                    Powerloom is a mechanized weaving technology that revolutionized the textile industry by automating the weaving process, significantly increasing production speed and efficiency.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </diV>;
}

export default Category;