<template>
    <div>
        <header class="admin-header">Table Heading</header>
        <span class="total-amount">Total payable amount: <strong class="amt">${{ totalAmount }}</strong> USD</span>

        <section>
            <v-card>
                <v-tabs
                    id="tab-title"
                    v-model="tab"
                    color="#25213B"
                    align-tabs="left"
                >
                    <v-tab  :value="1">All</v-tab>
                    <v-tab  :value="2">Paid</v-tab>
                    <v-tab  :value="3">Unpaid</v-tab>
                    <v-tab  :value="4">Overdue</v-tab>
                    <span class="total-amt">Total payable amount: <strong class="amt">${{ totalAmount }}</strong> USD</span>
                </v-tabs>
                <v-window v-model="tab">
                    <v-window-item
                        v-for="n in 4"
                        :key="n"
                        :value="n"
                    >
                    <v-container fluid>
                        <v-row>
                            <v-col
                                v-for="i in 6"
                                :key="i"
                                cols="12"
                                md="4"
                            >
                                <v-img
                                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                                aspect-ratio="1"
                                ></v-img>
                                
                            </v-col>
                        </v-row>
                    </v-container>
                    </v-window-item>
                </v-window>
            </v-card>
        </section>
        <AdminTables />
    </div>
</template>

<script>
import AdminTables from '../components/AdminTables.vue';
export default {
    components: { AdminTables },
    data() {
        return {
            selectedTab: "All",
            searchQuery: "",
            headers: [
                { text: "First Name", value: "firstName" },
                { text: "Last Name", value: "lastName" },
                { text: "Email", value: "email" },
                { text: "Payment Status", value: "paymentStatus" },
                { text: "Amount Due", value: "amountDue" },
                { text: "Actions", value: "actions", sortable: false }
            ],
            tab: '',
            totalAmount: 900.00,
        };
    },
    computed: {
        tabs() {
            return ["All", "Paid", "Unpaid", "Overdue"];
        },
        filteredUsers() {
            // use the getters in the Vuex store to filter the users list
        }
    },
    methods: {
        selectTab(tab) {
            // commit the setSelectedTab mutation in the Vuex store with the selected tab
        },
        getBadgeValue(tab) {
            // use the getters in the Vuex store to compute the badge value for the selected tab
        },
        getBadgeColor(tab) {
            // use the getters in the Vuex store to compute the badge color for the selected tab
        },
        markPaid(user) {
            // commit the markPaid mutation in the Vuex store with the selected user
            // call the mark-paid API endpoint with the user ID
        }
    },
}
</script>

<style scoped>
    .admin-header {
        margin-bottom: 20px;
        height: 17px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #6E6893;
    }

    .total-amount {
        margin: 5px 0 10px 0px !important;
        color: #6D5BD0 !important;
    }
    /* .total-amt {
        display: none;
    } */

    .amt {
        color: #6E6893 !important;
    }
    #tab-title:hover, #tab-title:active, #tab-title:focus{
        color: #25213B !important;
    }

    #tab-title:hover:after{
        transform: scale(1);
        transform-origin: bottom center;
    }

    .tab-title:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #25213B;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .tab-side {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tab-sub{
        /* margin-left: 50px; */
        /* padding-left: 30px; */
        font-size: 18px;
    }
    .headline {
        font-size: 24px;
        font-weight: bold;
    }
    .align-center {
        align-items: center;
    }
    .font-weight-bold {
        font-weight: bold;
    }
@media (min-width:576px) {
    .total-amt {
        margin-top: 12px;
        margin-left: 300px !important;
        text-align: end;
        justify-content: flex-end !important;
        color: #6E6893 !important;
    }
    .amt {
        color: #6D5BD0 !important;
    }
    .total-amount {
        display: none;
    }
    .tab-title:hover, .tab-title:active, .tab-title:focus{
        color: #25213B !important;
    }

    .tab-title:hover:after{
        transform: scale(1);
        transform-origin: bottom center;
    }

    .tab-title:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #25213B;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
}

@media (min-width: 768px){
    .total-amt {
        margin: 12px 0 0 30px !important;
        text-align: end;
        justify-content: flex-end !important;
        color: #6E6893 !important;
    }
}

@media (min-width: 992px){
    .total-amt {
        margin: 12px 0 0 30px !important;
        text-align: end;
        justify-content: flex-end !important;
        color: #6E6893 !important;
    }   
}

@media (min-width: 1200px){
    .total-amt {
        margin: 12px 0 0 30px !important;
        text-align: end;
        justify-content: flex-end !important;
        color: #6E6893 !important;
    }

    .tab-header {
        font-size: 24px;
        font-weight: 900;
    }
    .btn {
        width: 320px;
        height: 55px;
        margin-top: 40px;
        margin-left: 380px;
        margin-bottom: 65px;
        color: white;
        background: #00B0FF;
        box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.3);
        border-radius: 10px;
    } 
}
</style>