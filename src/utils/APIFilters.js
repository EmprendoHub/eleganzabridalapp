
class APIFilters {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;

    }
    
    searchAllFields() {
        const keyword = this.queryStr.get('keyword');
        // Define the conditions to search for the keyword in title, description, and category
        const searchConditions = {
            $or: [
                { title: { $regex: keyword, $options: 'i' } },
                //{ description: { $regex: keyword, $options: 'i' } },
                { category: { $regex: keyword, $options: 'i' } },
                { brand: { $regex: keyword, $options: 'i' } },
            ],
        };

        // Combine keyword search with other existing query conditions
        const combinedConditions = keyword
            ? {
                  $and: [
                      searchConditions, // Keyword search conditions
                  ],
              }
            : this.query ; // If no keyword, keep existing conditions
    
        // Apply the combined conditions to your query
        this.query = this.query.find(combinedConditions);
    
    
        return this;
    }

    filter() {

        const queryCopy = {};
        this.queryStr.forEach((value, key) => {
            queryCopy[key] = value;
        });

        const removeFields = [ 'keyword', 'page', 'per_page']
        removeFields.forEach((el) => delete queryCopy[el]);

        let prop = ""
        // Price Fitler for gt> gte>= lt< lte<= in PRICE
        let output = {}
        for (let key in queryCopy) {
            if ( !key.match(/\b(gt|gte|lt|lte)/) ) {
                output[key] = queryCopy[key];
                
            }else {
                prop = key.split('[')[0]

                let operator = key.match(/\[(.*)\]/)[1]

                if (!output[prop]) {
                    output[prop] = {}
                }

                output[prop][`$${operator}`] = queryCopy[key]
            }
            
        }
        this.query = this.query.find(output);

        return this
    }

    pagination(resPerPage) {
        const currentPage = Number(this.queryStr.get('page')) || 1
        
        const skip = resPerPage * (currentPage - 1)
    
        this.query = this.query.limit(resPerPage).skip(skip)
        return this
    }
}

export default APIFilters