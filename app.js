// ── Contract Config ─────────────────────────────────────────────
const CONTRACT_ADDRESS = "0x4f7FCFC75FA29408B38C4E481f03D03Ae7c5d866";

const ABI =[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "campaignId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "goalAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "CampaignCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_campaignId",
				"type": "uint256"
			}
		],
		"name": "claimRefund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_campaignId",
				"type": "uint256"
			}
		],
		"name": "contribute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "campaignId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "ContributionMade",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_goalAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_durationDays",
				"type": "uint256"
			}
		],
		"name": "createCampaign",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "campaignId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "campaignId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RefundIssued",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_campaignId",
				"type": "uint256"
			}
		],
		"name": "withdrawFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "campaignCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "campaigns",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "goalAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountCollected",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "withdrawn",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contributions",
		"outputs": [
			{
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "contributorAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getActiveCampaigns",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllCampaigns",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "goalAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "deadline",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountCollected",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "withdrawn",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "exists",
						"type": "bool"
					}
				],
				"internalType": "struct CrowdFunding.Campaign[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_campaignId",
				"type": "uint256"
			}
		],
		"name": "getCampaign",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "goalAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountCollected",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "withdrawn",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "goalReached",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_campaignId",
				"type": "uint256"
			}
		],
		"name": "getContributions",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "contributor",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct CrowdFunding.Contribution[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_campaignId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_contributor",
				"type": "address"
			}
		],
		"name": "getContributorAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_campaignId",
				"type": "uint256"
			}
		],
		"name": "getFundingProgress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_campaignId",
				"type": "uint256"
			}
		],
		"name": "isGoalMet",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// ── State ───────────────────────────────────────────────────────
let provider, signer, contract, userAddress;
let currentContribId = null;

// ── Wallet ──────────────────────────────────────────────────────
async function connectWallet() {
    if (!window.ethereum) {
        showToast("MetaMask not found", "error");
        return;
    }

    try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        userAddress = await signer.getAddress();

        contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

        const btn = document.getElementById("walletBtn");
        btn.textContent = userAddress.slice(0, 6) + "..." + userAddress.slice(-4);
        btn.classList.add("connected");

        showToast("Wallet connected", "success");

        refreshCampaigns();
        loadHistory(); // ✅ FIX: load history immediately

    } catch (err) {
        showToast(err.message, "error");
    }
}

// ── Load Campaigns ─────────────────────────────────────────────
async function refreshCampaigns() {
    const grid = document.getElementById("campaignsGrid");

    if (!contract) {
        grid.innerHTML = `<div class="empty">Connect wallet first</div>`;
        return;
    }

    try {
        const count = (await contract.campaignCount()).toNumber();

        if (count === 0) {
            grid.innerHTML = `<div class="empty">No campaigns yet</div>`;
            return;
        }

        grid.innerHTML = "";

        for (let i = 1; i <= count; i++) {
            const c = await contract.getCampaign(i);
            grid.appendChild(buildCard(c, i));
        }

    } catch (err) {
        grid.innerHTML = `<div class="empty">${err.message}</div>`;
    }
}

// ── Campaign Card ──────────────────────────────────────────────
function buildCard(c, id) {
    const goal = parseFloat(ethers.utils.formatEther(c[4]));
    const collected = parseFloat(ethers.utils.formatEther(c[6]));

    const pct = goal ? Math.min((collected / goal) * 100, 100).toFixed(0) : 0;

    const div = document.createElement("div");
    div.className = "campaign-card";

    div.innerHTML = `
        <div class="card-title">${c[2]}</div>
        <div class="card-desc">${c[3]}</div>

        <div>Raised: ${collected} ETH / ${goal} ETH</div>

        <div class="progress-bar">
            <div class="progress-fill" style="width:${pct}%"></div>
        </div>

        <div>ID: ${id}</div>

        <button class="btn-sm" onclick="openContrib(${id})">
            Contribute
        </button>
    `;

    return div;
}

// ── Create Campaign ─────────────────────────────────────────────
async function createCampaign() {
    try {
        const title = document.getElementById("c-title").value;
        const desc = document.getElementById("c-desc").value;
        const goal = document.getElementById("c-goal").value;
        const duration = document.getElementById("c-duration").value;

        const goalWei = ethers.utils.parseEther(goal);

        const tx = await contract.createCampaign(
            title,
            desc,
            goalWei,
            duration
        );

        showToast("Creating campaign...", "success");

        const receipt = await tx.wait();

        saveHistory({
            id: receipt.blockNumber,
            name: title,
            hash: receipt.transactionHash,
            amount: goal,
            gas: receipt.gasUsed.toString(),
            status: "CREATE",
            time: new Date().toLocaleString()
        });

        showToast("Campaign created!", "success");

        refreshCampaigns();
        loadHistory(); // ✅ FIX

    } catch (err) {
        showToast(err.reason || err.message, "error");
    }
}

// ── Contribute ────────────────────────────────────────────────
function openContrib(id) {
    currentContribId = id;
    document.getElementById("contribOverlay").classList.add("open");
}

async function submitContrib() {
    try {
        const amt = document.getElementById("contrib-amount").value;

        const tx = await contract.contribute(currentContribId, {
            value: ethers.utils.parseEther(amt)
        });

        const receipt = await tx.wait();

        saveHistory({
            id: currentContribId,
            name: "Contribution",
            hash: receipt.transactionHash,
            amount: amt,
            gas: receipt.gasUsed.toString(),
            status: "CONTRIBUTE",
            time: new Date().toLocaleString()
        });

        showToast("Contribution successful", "success");

        closeModal();
        refreshCampaigns();
        loadHistory(); // ✅ FIX

    } catch (err) {
        showToast(err.reason || err.message, "error");
    }
}

function closeModal() {
    document.getElementById("contribOverlay").classList.remove("open");
}

// ── HISTORY ────────────────────────────────────────────
function saveHistory(entry) {
    let data = JSON.parse(localStorage.getItem("txHistory") || "[]");
    data.push(entry);
    localStorage.setItem("txHistory", JSON.stringify(data));
}

function loadHistory() {
    const tableBody = document.querySelector("#historyTable tbody");
    const data = JSON.parse(localStorage.getItem("txHistory") || "[]");

    tableBody.innerHTML = "";

    if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7">No transactions</td></tr>`;
        return;
    }

    data.forEach(tx => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${tx.id}</td>
            <td>${tx.name}</td>
            <td class="hash-cell">${tx.hash}</td>
            <td>${tx.amount}</td>
            <td>${tx.gas}</td>
            <td>${tx.status}</td>
            <td>${tx.time}</td>
        `;

        tableBody.appendChild(tr);
    });
}

// ── CSV DOWNLOAD (FIXED SAFE VERSION) ─────────────────────────
function downloadCSV() {
    const data = JSON.parse(localStorage.getItem("txHistory") || "[]");

    if (!data.length) {
        showToast("No data to export", "error");
        return;
    }

    const escape = (v) => `"${String(v).replaceAll('"', '""')}"`;

    let csv = [
        "ID,Name,TxHash,Amount,GasUsed,Status,Timestamp"
    ];

    data.forEach(tx => {
        csv.push([
            tx.id,
            escape(tx.name),
            tx.hash,
            tx.amount,
            tx.gas,
            tx.status,
            escape(tx.time)
        ].join(","));
    });

    const blob = new Blob([csv.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transaction_history.csv";
    a.click();

    URL.revokeObjectURL(url);

    showToast("CSV downloaded", "success");
}

// ── Toast ───────────────────────────────────────────────────────
function showToast(msg, type = "success") {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.className = "toast show " + type;

    setTimeout(() => t.classList.remove("show"), 3000);
}

// ── Tab Switch ──────────────────────────────────────────────────
function switchTab(name) {
    document.querySelectorAll(".panel-section").forEach(p => p.classList.remove("active"));
    document.getElementById("tab-" + name).classList.add("active");

    if (name === "history") loadHistory();
}

// missing function fix (prevents error)
function viewContributions(id) {
    showToast("View feature not implemented yet", "error");
}

// ── Expose ──────────────────────────────────────────────────────
window.connectWallet = connectWallet;
window.createCampaign = createCampaign;
window.openContrib = openContrib;
window.submitContrib = submitContrib;
window.closeModal = closeModal;
window.downloadCSV = downloadCSV;
window.switchTab = switchTab;

window.onload = loadHistory;
