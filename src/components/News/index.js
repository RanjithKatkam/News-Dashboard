import { Component } from "react";
import Icon from '@mdi/react';
import { mdiSkipPrevious, mdiSkipNext } from '@mdi/js';
import NewsCard from "../NewsCard";
import "./index.css"

const apiConstants = {
    loading: "loading",
    success: "success",
    failed: "failed"
}

class News extends Component {
    state = {newsList: [], currentPage: 1, apiState: apiConstants.loading}

    calculateStartIndex = () => (this.state.currentPage - 1) * 10
    calculateEndIndex = () => this.state.currentPage * 10

    onClickPreviousBtn = () => {
        if (this.state.currentPage > 1) {
            this.setState((prevState) => ({currentPage: prevState.currentPage - 1}))
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }

    onClickNextBtn = () => {
        const totalPages = Math.ceil(this.state.newsList.length / 10)
        if (this.state.currentPage < totalPages){
            this.setState((prevState) => ({currentPage: prevState.currentPage + 1}))
            window.scrollTo({top: 0, behavior: "smooth"});
            }
        }

    

    fetchData = async (selectedCategory) => {
        this.setState({apiState: apiConstants.loading})
        const url = `https://api.currentsapi.services/v1/latest-news?page_size=60&category=${selectedCategory}&apiKey=XoajX2zOHqPNyzLhr-ux3JQCGBSBgS90U9QKYCUmMx_62qD3`;
        const options = {
            method: "GET"
        };
        try {
            const response = await fetch(url, options);
            const responseData = await response.json();
            setTimeout(() => {
                this.setState({ newsList: responseData.news, apiState: apiConstants.success })
            }, 1200);
        } catch (error) {
            this.setState({apiState: apiConstants.failed})
        }
    }

    componentDidMount() {
        this.fetchData(this.props.selectedCategory);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedCategory !== this.props.selectedCategory) {
            this.fetchData(this.props.selectedCategory);
        }
    }

    renderLoadingView = () => {
        return(
            <div className="loading-view-container">
                <div class="pyramid-loader">
                    <div class="wrapper">
                        <span class="side side1"></span>
                        <span class="side side2"></span>
                        <span class="side side3"></span>
                        <span class="side side4"></span>
                        <span class="shadow"></span>
                    </div>  
                </div>
            </div>
        )
    }

    renderFailureView = () => {

    }

    renderSuccessView = () => {
        const {newsList} = this.state
        const startIndex = this.calculateStartIndex()
        const endIndex = this.calculateEndIndex()
        const ItemsToDisplay = newsList.slice(startIndex, endIndex)
        return(
            <>
                {
                    ItemsToDisplay.map(eachItem => {
                        return <NewsCard key={eachItem.id} card={eachItem} />
                    })
                }
                <div className="pagination-container">
                    <button onClick={this.onClickPreviousBtn} className="pagination-button"><Icon path={mdiSkipPrevious} size={1} /></button>
                    <p className="pagination-number">{this.state.currentPage}</p>
                    <button onClick={this.onClickNextBtn} className="pagination-button"><Icon path={mdiSkipNext} size={1} /></button>
                </div>
            </>
        )
    }

    renderNews = () => {
        const {apiState} = this.state
        switch (apiState){
            case apiConstants.loading :
                return this.renderLoadingView()
            case apiConstants.success :
                return this.renderSuccessView()
            default:
                 return null
        }
    }


    render(){
        return(
            <div className="news-main-container">
                <div className="news-sub-container">
                    {this.renderNews()}
                </div>
            </div>
        )
    }
}


export default News