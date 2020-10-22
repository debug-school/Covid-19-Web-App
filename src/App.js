import React ,{Component,Fragment} from 'react';
import './App.css';

import CountryList from './components/CountryList/CountryList.js';
import SearchBox from './components/SearchBox/SearchBox.js';


class App extends Component {

 constructor(){
    super();
    this.state = {
     countries:[],
     stats:[],
     searchField:''
    }
  }
  async componentDidMount(){
    const resp = await fetch('https://api.covid19api.com/countries')
    const countries = await resp.json()
    this.setState({countries})
    this.state.countries.forEach(async country => {
      const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
      const data = await resp.json()
      if(data.length)
      this.setState(prevState => (
        {stats:prevState.stats.concat({...data[data.length - 1],CountryCode:country.ISO2})}
      ))
    })
  }

  handleChange = (e)=>{
    this.setState( {searchField:e.target.value} );
  }

  render() {
    const {stats,searchField} = this.state;
    const filteredCountries = stats.filter((country)=>{
      return country.Country.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <Fragment>
        <h3>Rasel Rana</h3>
        <h5>Debug School</h5>

        <div className="App">
          <h1>Covid19 Stats Web App</h1>

          <SearchBox
            placeholder="Enter country name...."
            handleChange={this.handleChange}
            value={this.searchField}
          />
          <CountryList stats={filteredCountries} />

        </div>
      </Fragment>
    )
  }

}

export default App;
// 
    