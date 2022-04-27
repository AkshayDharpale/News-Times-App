import React from 'react';
import {Route, Link} from 'react-router-dom';
import FourthView from '../fourthview/fourthview.component';
import {withRouter} from 'react-router';
import {Bootstrap, Grid, Row, Col, Button, Image, Modal, Popover} from 'react-bootstrap';
import traineeship from './company.api';
import Header from '../header/header.component';
import InfiniteScroll from 'react-infinite-scroller';

require('./company.style.scss');

class Traineeship extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            page: 0,
            resetResult: false,
            hasMore: true,
            totalPages: null,
            totalElements: 0,
        };
    }

    componentDidMount() {
        this.fetchCompanies(this.state.page);
    }

    fetchCompanies = page => {
        let courseIds = '';

        this.props.rootState.filterByCourseIds.map(function (course) {
            courseIds = courseIds + '' + course.id + ',';
        });

        traineeship.getAll(page, this.props.rootState.selectedJob, courseIds.substring(0, courseIds.length - 1), this.props.rootState.selectedCity).then(response => {
            if (response.data) {
                const companies = Array.from(this.state.companies);
                if(response.data._embedded !== undefined){
                    this.setState({
                        companies: companies.concat(response.data._embedded.companies),
                        totalPages: response.data.page.totalPages,
                        totalElements: response.data.page.totalElements,
                    });
                }

                if (page >= this.state.totalPages) {
                    this.setState({hasMore: false});
                }
            } else {
                console.log(response);
            }
        });
    };

    render() {
        return (
            <div className={"wrapperDiv"}>
                {/*{JSON.stringify(this.props.rootState)}*/}
                <div className={"flexDivCol"}>
                    <div id="header2">
                        <div style={{flex: .05}}>
                            <img src="assets/img/icArrowBack.png" onClick={() => this.props.history.go(-1)}/>
                        </div>
                        <div style={{flex: 3}}>
                            <Header size="small"/>
                        </div>
                    </div>
                    <div id="result">
                        <div className={"search"}>
                            <h2 style={{fontSize: 22}}>Harjoittelupaikkoja</h2>
                            <p className={"secondaryColor LatoBold"} style={{fontSize: 13}}>{this.state.totalElements} paikkaa löydetty</p>
                        </div>
                        <div className={"filters"}>
                            <h5 style={{marginTop: '30px', marginBottom: '10px'}} className={"primaryColor"}>
                                <strong>Hakukriteerit</strong></h5>
                            {
                                this.props.rootState.filters.map((filter, key) => (
                                    <div key={key} className={"filter"}>{filter.title}</div>
                                ))
                            }
                        </div>
                        <div className={"searchResults"}>
                            <h5 style={{marginTop: '30px', marginBottom: '10px'}} className={"primaryColor"}>
                                <strong>Hakutulokset</strong></h5>
                            <InfiniteScroll
                                pageStart={0}
                                loadMore={this.fetchCompanies}
                                hasMore={this.state.hasMore}
                                loader={<div className="loader" key={0}>Loading ...</div>}
                                useWindow={false}
                            >
                                {
                                    this.state.companies.map((traineeship, key) => (
                                        <div id={"item"} key={key}>
                                            <div className={"companyInfo"}>
                                                <div className={"heading"}>
                                                    <div id={"companyDiv"}>
                                                        <p className={"LatoBlack"} style={{
                                                            fontSize: '18px',
                                                            lineHeight: '23px'
                                                        }}>{traineeship.name}</p>
                                                    </div>
                                                    {
                                                        traineeship.mediaUrl == null
                                                            ? ''
                                                            :
                                                            <div id={"videoDiv"}>
                                                                <div className={"youtubeBox center"}>
                                                                    <div id={"youtubeIcon"}>
                                                                        <a className={"primaryColor"}
                                                                           href={traineeship.mediaUrl}>
                                                                        <span style={{marginRight: '3px'}}><Image
                                                                            src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c545.png"
                                                                            style={{
                                                                                width: '24px',
                                                                                height: '17px'
                                                                            }}/></span>
                                                                            <span> <p style={{
                                                                                fontSize: '13px',
                                                                                lineHeight: '24px',
                                                                                margin: 0,
                                                                                display: 'inline-block'
                                                                            }}>Esittely</p></span>
                                                                        </a>
                                                                    </div>
                                                                    <div id={"txtVideo"}>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                    }

                                                </div>
                                                <div className={"location"}>
                                                    <div id={"locationIcon"}>
                                                        <Image src="assets/img/icLocation.png"
                                                               style={{marginTop: '-7px'}}/>
                                                    </div>
                                                    <div id={"address"}>
                                                        {
                                                            traineeship.addresses.map((address, key) => {
                                                                return (
                                                                    <a href={"https://www.google.com/maps/search/?api=1&query=" + encodeURI("Fredrikinkatu 4, Helsinki")}>
                                                                        <p key={key} className={"primaryColor"} style={{fontSize: '13px'}}>{address.street}, {address.city}</p>
                                                                    </a>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                <div className={"companyDescription"}>
                                                    <p className={"secondaryColor"} style={{
                                                        fontSize: '14px',
                                                        lineHeight: '20px'
                                                    }}>{traineeship.description}</p>
                                                </div>

                                                <div>
                                                    {

                                                        traineeship.images.map((image, key) => {
                                                            return (
                                                                <img id={"thumbnail"} width={"100%"}
                                                                     src={image.url}
                                                                     style={{
                                                                         width: '80px',
                                                                         height: '80px',
                                                                         marginRight: '10px',
                                                                         marginBottom: '10px'
                                                                     }}
                                                                     alt=""
                                                                     key={key}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </div>

                                                <div className={"companyContacts"} style={{marginTop: '20px'}}>
                                                    <p className={"contactInfo"}>URL: {traineeship.website}</p>
                                                    <p className={"contactInfo"}>Email: {traineeship.email}</p>
                                                    <p className={"contactInfo"}>Puh: {traineeship.phonenumber}</p>
                                                    <p className={"contactInfo"}>Contact: {traineeship.contact}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </InfiniteScroll>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Traineeship);